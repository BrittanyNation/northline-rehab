# Northline Rehab

Fully functional physical therapy and recovery studio website for Northline Rehab, a fictional studio in Clarksville, TN. Original portfolio sample work by Brittany Nation, built to support applications for Claims Examiner, Claims Operations, Technical Writer, and Junior Web Developer roles. No affiliation with any real clinic is claimed.

Live demo: https://brittanynation.github.io/northline-rehab/

## What works
- Programs page: 12 programs rendered from data, category chips, live search, four sort orders, live result count, honest empty state, detail modal where the session pack selector reprices live (packs of 4 save 10 percent, packs of 8 save 20 percent), wishlist hearts persisted in localStorage.
- Plan and checkout: basket drawer and checkout page share one persisted basket, quantity controls, REHAB10 promo for 10 percent off, 7 percent tax as its own line with totals rounded to whole cents, full validation (name, email, address, city, 5 digit ZIP, non past and non Sunday first session date, 16 digit card, future expiry, CVC) ending in a confirmation with a generated NR-XXXXXX reference, order saved and basket cleared.
- Visit page: hours table with today highlighted, two workshops with a validated RSVP form that checks the date against the workshop weekday and subtracts seats live (NR-R-XXXXX reference), FAQ accordions opening one at a time, duplicate aware Recovery Letter signup.

All state is client side for static hosting, and the demo labeling says so honestly in the UI. Content imagery is real Pexels photography downloaded into images/.

## Run locally
Open index.html in a browser, or serve the folder with any static server.

Palette: deep pine #24473A, terracotta #C05F3C, brass #C08A2E, linen #F7F2E8, sage #8AA899, ink #21281F.
