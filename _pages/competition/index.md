---
layout: competition
id: competition
nav: true
nav-order: 3
title: Compet&shy;ition
intro: Win your very own four-night stay in this vibrant Southeast Asian starlet, for you and your travel partner. You’ll fly with Qantas for a luxurious stay at the Villa Samadhi, a boutique hotel decked with colonial-era refinement. Housed in an old garrison in the heart of the beautiful Labrador Nature Reserve, you’ll stay in effortlessly-charming, historic digs with a stylish, contemporary flair. Set in a tropical oasis, you’re just a short hop from the buzzing heart of Singapore.
extra-intro: Whether you’re a foodie, culture seeker, or adventurer, you can craft your very own four-day adventure in this beguiling land. Enter below to be in with a chance to win!

title-sub: Make the itinerary a reality
enter-cta: Enter Now

competition-form:
  id: comp
  post-url: "#getFormUrl"
  expiry-date: 2050-01-01
  fields:
    - id: name
      type: text
      label: Name
      required: true
    - id: email
      type: email
      label: Email
      required: true
    - id: qualify
      type: radio
      label: Are you a UK resident and over the age of 18?
      required: true
      options:
        - id: qualify-true
          label: 'Yes'
          value: 'yes'
        - id: qualify-false
          label: 'No'
          value: 'no'
          invalid: true
    - id: opt-in
      type: radio
      label: Would you like to receive emails from our Qantas Airways?
      required: true
      options:
        - id: opt-in-true
          label: 'Yes'
          value: 'yes'
        - id: opt-in-false
          label: 'No'
          value: 'no'
  submit: Submit Entry
  terms: >
    By submitting your entry, you agree to the <a href="#" class="js-open-modal link--underlined" data-open-modal="competition-terms">terms and conditions</a> of this competition
---