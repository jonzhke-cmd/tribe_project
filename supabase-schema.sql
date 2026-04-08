-- AutoTrip Booking System Database Schema
-- Run this in Supabase SQL Editor

-- 1. CARS TABLE (Fleet Inventory)
CREATE TABLE IF NOT EXISTS cars (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  make VARCHAR(50) NOT NULL,
  model VARCHAR(50) NOT NULL,
  year INTEGER NOT NULL,
  category VARCHAR(20) CHECK (category IN ('economy', 'compact', 'mid-size', 'full-size', 'suv', 'luxury', 'van')),
  transmission VARCHAR(20) CHECK (transmission IN ('automatic', 'manual')),
  fuel_type VARCHAR(20) CHECK (fuel_type IN ('petrol', 'diesel', 'hybrid', 'electric')),
  seats INTEGER NOT NULL,
  luggage_capacity INTEGER,
  daily_rate DECIMAL(10,2) NOT NULL,
  weekly_rate DECIMAL(10,2),
  image_url TEXT,
  is_available BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. CUSTOMERS TABLE
CREATE TABLE IF NOT EXISTS customers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  phone VARCHAR(50),
  address TEXT,
  driver_license_number VARCHAR(100),
  driver_license_expiry DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. BOOKINGS TABLE
CREATE TABLE IF NOT EXISTS bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  booking_reference VARCHAR(20) UNIQUE NOT NULL DEFAULT 'BK-' || LPAD(FLOOR(RANDOM() * 10000)::TEXT, 4, '0'),
  customer_id UUID REFERENCES customers(id) ON DELETE SET NULL,
  car_id UUID REFERENCES cars(id) ON DELETE SET NULL,
  
  -- Customer details (denormalized for performance)
  customer_name VARCHAR(200) NOT NULL,
  customer_email VARCHAR(255) NOT NULL,
  customer_phone VARCHAR(50) NOT NULL,
  
  -- Booking details
  pickup_location VARCHAR(200) NOT NULL,
  dropoff_location VARCHAR(200) NOT NULL,
  pickup_date TIMESTAMP WITH TIME ZONE NOT NULL,
  return_date TIMESTAMP WITH TIME ZONE NOT NULL,
  flight_number VARCHAR(50),
  special_requests TEXT,
  
  -- Pricing
  daily_rate DECIMAL(10,2) NOT NULL,
  total_days INTEGER NOT NULL,
  subtotal DECIMAL(10,2) NOT NULL,
  tax_amount DECIMAL(10,2) DEFAULT 0,
  total_amount DECIMAL(10,2) NOT NULL,
  deposit_paid BOOLEAN DEFAULT false,
  
  -- Status
  status VARCHAR(20) CHECK (status IN ('pending', 'confirmed', 'paid', 'active', 'completed', 'cancelled')) DEFAULT 'pending',
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Indexes for performance
  INDEX idx_bookings_status (status),
  INDEX idx_bookings_pickup_date (pickup_date),
  INDEX idx_bookings_customer_email (customer_email)
);

-- 4. EMAIL LOGS TABLE
CREATE TABLE IF NOT EXISTS email_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  booking_id UUID REFERENCES bookings(id) ON DELETE CASCADE,
  email_type VARCHAR(50) CHECK (email_type IN ('confirmation', 'reminder', 'followup', 'admin_alert')),
  recipient_email VARCHAR(255) NOT NULL,
  subject VARCHAR(255) NOT NULL,
  sent_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status VARCHAR(20) CHECK (status IN ('sent', 'failed', 'opened', 'clicked')) DEFAULT 'sent',
  error_message TEXT
);

-- 5. SAMPLE DATA
INSERT INTO cars (make, model, year, category, transmission, fuel_type, seats, luggage_capacity, daily_rate, weekly_rate, image_url) VALUES
('Toyota', 'Yaris', 2025, 'economy', 'automatic', 'petrol', 5, 2, 45.00, 280.00, '/cars/toyota-yaris.jpg'),
('Hyundai', 'i30', 2025, 'compact', 'automatic', 'petrol', 5, 3, 55.00, 350.00, '/cars/hyundai-i30.jpg'),
('Toyota', 'Camry', 2025, 'mid-size', 'automatic', 'hybrid', 5, 3, 65.00, 420.00, '/cars/toyota-camry.jpg'),
('Toyota', 'RAV4', 2025, 'suv', 'automatic', 'hybrid', 5, 4, 75.00, 490.00, '/cars/toyota-rav4.jpg'),
('Kia', 'Carnival', 2025, 'van', 'automatic', 'petrol', 8, 6, 95.00, 630.00, '/cars/kia-carnival.jpg');

-- 6. TRIGGER FOR UPDATED_AT
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_cars_updated_at BEFORE UPDATE ON cars
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_customers_updated_at BEFORE UPDATE ON customers
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_bookings_updated_at BEFORE UPDATE ON bookings
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- 7. VIEW FOR DASHBOARD
CREATE OR REPLACE VIEW dashboard_stats AS
SELECT 
  COUNT(*) as total_bookings,
  COUNT(CASE WHEN status = 'confirmed' THEN 1 END) as confirmed_bookings,
  COUNT(CASE WHEN status = 'pending' THEN 1 END) as pending_bookings,
  SUM(CASE WHEN status IN ('confirmed', 'paid', 'active', 'completed') THEN total_amount ELSE 0 END) as total_revenue,
  AVG(CASE WHEN status IN ('confirmed', 'paid', 'active', 'completed') THEN total_amount ELSE NULL END) as avg_booking_value
FROM bookings
WHERE created_at >= DATE_TRUNC('month', NOW());

-- 8. FUNCTION TO GENERATE BOOKING REFERENCE
CREATE OR REPLACE FUNCTION generate_booking_reference()
RETURNS TRIGGER AS $$
BEGIN
  NEW.booking_reference := 'BK-' || LPAD(FLOOR(RANDOM() * 10000)::TEXT, 4, '0');
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER generate_booking_ref BEFORE INSERT ON bookings
  FOR EACH ROW EXECUTE FUNCTION generate_booking_reference();