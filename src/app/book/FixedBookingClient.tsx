                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Extra Notes</label>
                    <textarea 
                      rows={4} 
                      className="w-full rounded-2xl border border-slate-200 bg-white py-4 px-5 outline-none focus:border-primary" 
                      value={data.notes} 
                      onChange={e => updateData({ notes: e.target.value })} 
                      placeholder="Child seats, special requests, etc." 
                    />
                  </div>

                  <div className="rounded-2xl bg-orange-50 p-6 flex gap-4">
                    <ShieldCheck className="h-6 w-6 text-primary shrink-0" />
                    <p className="text-sm text-orange-900 leading-relaxed">
                      By requesting this booking, you agree that your details will be processed to check availability. 
                      No payment is required until confirmation.
                    </p>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="flex h-16 w-full items-center justify-center gap-3 rounded-2xl bg-primary font-bold text-white transition hover:bg-primary-hover disabled:opacity-50"
                  >
                    {isSubmitting ? "Processing..." : "Complete Booking Request"} <CheckCircle2 className="h-5 w-5" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* SIDEBAR: SUMMARY */}
          <aside className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              <div className="rounded-[2.5rem] bg-slate-950 p-6 sm:p-8 text-white shadow-2xl">
                <h3 className="text-xl font-black mb-6">Booking Summary</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-slate-300">Pickup</span>
                    <div className="text-right">
                      <div className="font-bold">{data.pickupLocation}</div>
                      <div className="text-sm text-slate-300">
                        {data.pickupDate ? new Date(data.pickupDate).toLocaleDateString('en-AU', { weekday: 'short', day: 'numeric', month: 'short' }) : 'Select date'} • {data.pickupTime}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-slate-300">Return</span>
                    <div className="text-right">
                      <div className="font-bold">{data.dropoffLocation}</div>
                      <div className="text-sm text-slate-300">
                        {data.returnDate ? new Date(data.returnDate).toLocaleDateString('en-AU', { weekday: 'short', day: 'numeric', month: 'short' }) : 'Select date'} • {data.returnTime}
                      </div>
                    </div>
                  </div>
                  
                  {selectedVehicle && (
                    <div className="flex justify-between items-center pb-4 border-b border-white/10">
                      <span className="text-slate-300">Vehicle</span>
                      <div className="text-right">
                        <div className="font-bold">{selectedVehicle.name}</div>
                        <div className="text-sm text-slate-300">${selectedVehicle.price}/day</div>
                      </div>
                    </div>
                  )}
                  
                  {totals && (
                    <div className="pt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-300">Duration</span>
                        <span className="font-bold">{totals.days} day{totals.days > 1 ? 's' : ''}</span>
                      </div>
                      <div className="flex justify-between items-center text-lg">
                        <span>Estimated Total</span>
                        <span className="font-black text-2xl">${totals.total}</span>
                      </div>
                      <p className="text-xs text-slate-400 mt-2">Excluding optional extras & insurance</p>
                    </div>
                  )}
                  
                  {!totals && (
                    <div className="pt-4 text-center py-8">
                      <CarFront className="h-12 w-12 mx-auto text-slate-700 mb-4" />
                      <p className="text-slate-400">Select dates and vehicle to see estimated price</p>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="rounded-[2.5rem] bg-white p-6 sm:p-8 border border-slate-100 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="h-5 w-5 text-primary" />
                  <h4 className="font-bold text-slate-900">Why Book With AutoTrip?</h4>
                </div>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                    <span><strong>No hidden fees</strong> — All taxes and charges included</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                    <span><strong>Free cancellation</strong> — Up to 48 hours before pickup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                    <span><strong>24/7 roadside assistance</strong> — Australia-wide coverage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                    <span><strong>Full insurance options</strong> — Zero excess available</span>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>

        {/* PROGRESS INDICATOR */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="flex items-center justify-between">
            <div className={`flex items-center gap-3 ${step >= 1 ? 'text-primary' : 'text-slate-400'}`}>
              <div className={`flex h-10 w-10 items-center justify-center rounded-full ${step >= 1 ? 'bg-primary text-white' : 'bg-slate-100'}`}>
                1
              </div>
              <span className="font-bold">Dates & Location</span>
            </div>
            
            <div className="h-1 flex-1 mx-4 bg-slate-200">
              <div className={`h-1 bg-primary transition-all duration-300 ${step >= 2 ? 'w-full' : 'w-0'}`} />
            </div>
            
            <div className={`flex items-center gap-3 ${step >= 2 ? 'text-primary' : 'text-slate-400'}`}>
              <div className={`flex h-10 w-10 items-center justify-center rounded-full ${step >= 2 ? 'bg-primary text-white' : 'bg-slate-100'}`}>
                2
              </div>
              <span className="font-bold">Vehicle</span>
            </div>
            
            <div className="h-1 flex-1 mx-4 bg-slate-200">
              <div className={`h-1 bg-primary transition-all duration-300 ${step >= 3 ? 'w-full' : 'w-0'}`} />
            </div>
            
            <div className={`flex items-center gap-3 ${step >= 3 ? 'text-primary' : 'text-slate-400'}`}>
              <div className={`flex h-10 w-10 items-center justify-center rounded-full ${step >= 3 ? 'bg-primary text-white' : 'bg-slate-100'}`}>
                3
              </div>
              <span className="font-bold">Details</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}