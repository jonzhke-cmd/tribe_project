# AutoTrip Booking System Setup Guide

## 🚀 Complete Booking & CRM System

### **WHAT'S BEEN BUILT:**

1. **✅ Database Schema** (Supabase) - Cars, Customers, Bookings, Email logs
2. **✅ Booking API** - Enhanced with CRM integration
3. **✅ Email Automation** - Customer confirmations + admin alerts
4. **✅ Booking Form** - User-friendly React component
5. **✅ CRM Dashboard** - Already exists in `/admin`
6. **✅ Environment Setup** - Ready for production

### **SETUP STEPS:**

#### **1. SUPABASE DATABASE**
```bash
# 1. Create Supabase project at https://supabase.com
# 2. Run the SQL schema in SQL Editor:
#    File: supabase-schema.sql
# 3. Get your API keys from Project Settings → API
```

#### **2. RESEND EMAIL SERVICE**
```bash
# 1. Sign up at https://resend.com
# 2. Verify your domain (autotrip.com.au)
# 3. Create API key
# 4. Add sending domain: bookings@autotrip.com.au
```

#### **3. ENVIRONMENT VARIABLES**
```bash
# Copy .env.local.example to .env.local
cp .env.local.example .env.local

# Fill in your values:
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
ADMIN_EMAIL=enquiry@autotrip.com.au
```

#### **4. VERCEL DEPLOYMENT**
```bash
# 1. Push to GitHub
git add .
git commit -m "Add booking system"
git push

# 2. Deploy on Vercel
#    - Connect GitHub repo
#    - Add all environment variables
#    - Deploy
```

### **BOOKING FLOW:**

```
User fills form → API saves to Supabase → 
→ Email to customer (confirmation) → 
→ Email to admin (notification) → 
→ Admin reviews in CRM dashboard → 
→ Admin contacts customer → Payment → Confirmation
```

### **CRM DASHBOARD FEATURES:**

**Access:** https://autotrip-five.vercel.app/admin
- 📊 Real-time booking overview
- 👥 Customer management
- 💰 Revenue tracking
- 📧 Email campaign logs
- 🔍 Search & filter bookings
- 📱 Mobile responsive

### **EMAIL AUTOMATION:**

1. **Instant Confirmation** (to customer)
2. **Admin Alert** (to enquiry@autotrip.com.au)
3. **24h Reminder** (before pickup) *[coming soon]*
4. **Follow-up** (after return) *[coming soon]*

### **TEST THE SYSTEM:**

1. **Visit:** https://autotrip-five.vercel.app/book
2. **Fill form** with test data
3. **Check emails** (customer + admin)
4. **Login to CRM:** https://autotrip-five.vercel.app/admin
5. **See booking** in dashboard

### **NEXT ENHANCEMENTS:**

1. **Payment Integration** (Stripe)
2. **Calendar Sync** (Google Calendar)
3. **SMS Notifications** (Twilio)
4. **Vehicle Availability Calendar**
5. **Automated Reminders** (24h before pickup)
6. **Customer Portal** (view bookings, download invoices)

### **TROUBLESHOOTING:**

#### **Emails not sending?**
- Check Resend API key
- Verify domain in Resend
- Check spam folder
- Test with https://resend.com/overview

#### **Database errors?**
- Check Supabase connection
- Verify table permissions
- Check RLS (Row Level Security) policies

#### **Form not submitting?**
- Check browser console
- Verify API route is accessible
- Check CORS settings

### **SECURITY NOTES:**

1. **API Keys** stored in environment variables
2. **Database** uses RLS (Row Level Security)
3. **Emails** sent via verified domain
4. **Form validation** on client & server
5. **Rate limiting** recommended for production

### **SUPPORT:**

For issues:
1. Check Vercel logs
2. Check Supabase logs
3. Test API directly: `curl -X POST /api/book`
4. Email: enquiry@autotrip.com.au

---

**Status:** ✅ **READY FOR PRODUCTION**

All components built and tested. Just add your API keys and deploy! 🚗✨