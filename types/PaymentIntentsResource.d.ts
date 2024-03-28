// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface PaymentIntentCreateParams {
      /**
       * Amount intended to be collected by this PaymentIntent. A positive integer representing how much to charge in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). The minimum amount is $0.50 US or [equivalent in charge currency](https://stripe.com/docs/currencies#minimum-and-maximum-charge-amounts). The amount value supports up to eight digits (e.g., a value of 99999999 for a USD charge of $999,999.99).
       */
      amount: number;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      /**
       * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. The amount of the application fee collected will be capped at the total payment amount. For more information, see the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
       */
      application_fee_amount?: number;

      /**
       * When you enable this parameter, this PaymentIntent accepts payment methods that you enable in the Dashboard and that are compatible with this PaymentIntent's other parameters.
       */
      automatic_payment_methods?: PaymentIntentCreateParams.AutomaticPaymentMethods;

      /**
       * Controls when the funds will be captured from the customer's account.
       */
      capture_method?: PaymentIntentCreateParams.CaptureMethod;

      /**
       * Set to `true` to attempt to [confirm this PaymentIntent](https://stripe.com/docs/api/payment_intents/confirm) immediately. This parameter defaults to `false`. When creating and confirming a PaymentIntent at the same time, you can also provide the parameters available in the [Confirm API](https://stripe.com/docs/api/payment_intents/confirm).
       */
      confirm?: boolean;

      /**
       * Describes whether we can confirm this PaymentIntent automatically, or if it requires customer action to confirm the payment.
       */
      confirmation_method?: PaymentIntentCreateParams.ConfirmationMethod;

      /**
       * ID of the ConfirmationToken used to confirm this PaymentIntent.
       *
       * If the provided ConfirmationToken contains properties that are also being provided in this request, such as `payment_method`, then the values in this request will take precedence.
       */
      confirmation_token?: string;

      /**
       * ID of the Customer this PaymentIntent belongs to, if one exists.
       *
       * Payment methods attached to other Customers cannot be used with this PaymentIntent.
       *
       * If present in combination with [setup_future_usage](https://stripe.com/docs/api#payment_intent_object-setup_future_usage), this PaymentIntent's payment method will be attached to the Customer after the PaymentIntent has been confirmed and any required actions from the user are complete.
       */
      customer?: string;

      /**
       * An arbitrary string attached to the object. Often useful for displaying to users.
       */
      description?: string;

      /**
       * Set to `true` to fail the payment attempt if the PaymentIntent transitions into `requires_action`. Use this parameter for simpler integrations that don't handle customer actions, such as [saving cards without authentication](https://stripe.com/docs/payments/save-card-without-authentication). This parameter can only be used with [`confirm=true`](https://stripe.com/docs/api/payment_intents/create#create_payment_intent-confirm).
       */
      error_on_requires_action?: boolean;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * ID of the mandate that's used for this payment. This parameter can only be used with [`confirm=true`](https://stripe.com/docs/api/payment_intents/create#create_payment_intent-confirm).
       */
      mandate?: string;

      /**
       * This hash contains details about the Mandate to create. This parameter can only be used with [`confirm=true`](https://stripe.com/docs/api/payment_intents/create#create_payment_intent-confirm).
       */
      mandate_data?: Stripe.Emptyable<PaymentIntentCreateParams.MandateData>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.MetadataParam;

      /**
       * Set to `true` to indicate that the customer isn't in your checkout flow during this payment attempt and can't authenticate. Use this parameter in scenarios where you collect card details and [charge them later](https://stripe.com/docs/payments/cards/charging-saved-cards). This parameter can only be used with [`confirm=true`](https://stripe.com/docs/api/payment_intents/create#create_payment_intent-confirm).
       */
      off_session?: boolean | PaymentIntentCreateParams.OffSession;

      /**
       * The Stripe account ID that these funds are intended for. Learn more about the [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
       */
      on_behalf_of?: string;

      /**
       * Provides industry-specific information about the charge.
       */
      payment_details?: PaymentIntentCreateParams.PaymentDetails;

      /**
       * ID of the payment method (a PaymentMethod, Card, or [compatible Source](https://stripe.com/docs/payments/payment-methods#compatibility) object) to attach to this PaymentIntent.
       *
       * If you don't provide the `payment_method` parameter or the `source` parameter with `confirm=true`, `source` automatically populates with `customer.default_source` to improve migration for users of the Charges API. We recommend that you explicitly provide the `payment_method` moving forward.
       */
      payment_method?: string;

      /**
       * The ID of the payment method configuration to use with this PaymentIntent.
       */
      payment_method_configuration?: string;

      /**
       * If provided, this hash will be used to create a PaymentMethod. The new PaymentMethod will appear
       * in the [payment_method](https://stripe.com/docs/api/payment_intents/object#payment_intent_object-payment_method)
       * property on the PaymentIntent.
       */
      payment_method_data?: PaymentIntentCreateParams.PaymentMethodData;

      /**
       * Payment method-specific configuration for this PaymentIntent.
       */
      payment_method_options?: PaymentIntentCreateParams.PaymentMethodOptions;

      /**
       * The list of payment method types (for example, a card) that this PaymentIntent can use. If you don't provide this, it defaults to ["card"]. Use `automatic_payment_methods` to manage payment methods from the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods).
       */
      payment_method_types?: Array<string>;

      /**
       * Options to configure Radar. Learn more about [Radar Sessions](https://stripe.com/docs/radar/radar-session).
       */
      radar_options?: PaymentIntentCreateParams.RadarOptions;

      /**
       * Email address to send the receipt to. If you specify `receipt_email` for a payment in live mode, you send a receipt regardless of your [email settings](https://dashboard.stripe.com/account/emails).
       */
      receipt_email?: string;

      /**
       * The URL to redirect your customer back to after they authenticate or cancel their payment on the payment method's app or site. If you'd prefer to redirect to a mobile application, you can alternatively supply an application URI scheme. This parameter can only be used with [`confirm=true`](https://stripe.com/docs/api/payment_intents/create#create_payment_intent-confirm).
       */
      return_url?: string;

      /**
       * Indicates whether confirmation for this PaymentIntent using a secret key is `required` or `optional`.
       */
      secret_key_confirmation?: PaymentIntentCreateParams.SecretKeyConfirmation;

      /**
       * Indicates that you intend to make future payments with this PaymentIntent's payment method.
       *
       * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
       *
       * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
       */
      setup_future_usage?: PaymentIntentCreateParams.SetupFutureUsage;

      /**
       * Shipping information for this PaymentIntent.
       */
      shipping?: PaymentIntentCreateParams.Shipping;

      /**
       * For card charges, use [statement_descriptor_suffix](https://stripe.com/docs/payments/account/statement-descriptors#dynamic). Otherwise, you can use this value as the complete description of a charge on your customers' statements. It must contain at least one letter and be 1–22 characters long.
       */
      statement_descriptor?: string;

      /**
       * Provides information about a card payment that customers see on their statements. Concatenated with the prefix (shortened descriptor) or statement descriptor that's set on the account to form the complete statement descriptor. The concatenated descriptor must contain 1-22 characters.
       */
      statement_descriptor_suffix?: string;

      /**
       * The parameters that you can use to automatically create a Transfer.
       * Learn more about the [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
       */
      transfer_data?: PaymentIntentCreateParams.TransferData;

      /**
       * A string that identifies the resulting payment as part of a group. Learn more about the [use case for connected accounts](https://stripe.com/docs/connect/separate-charges-and-transfers).
       */
      transfer_group?: string;

      /**
       * Set to `true` when confirming server-side and using Stripe.js, iOS, or Android client-side SDKs to handle the next actions.
       */
      use_stripe_sdk?: boolean;
    }

    namespace PaymentIntentCreateParams {
      interface AutomaticPaymentMethods {
        /**
         * Controls whether this PaymentIntent will accept redirect-based payment methods.
         *
         * Redirect-based payment methods may require your customer to be redirected to a payment method's app or site for authentication or additional steps. To [confirm](https://stripe.com/docs/api/payment_intents/confirm) this PaymentIntent, you may be required to provide a `return_url` to redirect customers back to your site after they authenticate or complete the payment.
         */
        allow_redirects?: AutomaticPaymentMethods.AllowRedirects;

        /**
         * Whether this feature is enabled.
         */
        enabled: boolean;
      }

      namespace AutomaticPaymentMethods {
        type AllowRedirects = 'always' | 'never';
      }

      type CaptureMethod = 'automatic' | 'automatic_async' | 'manual';

      type ConfirmationMethod = 'automatic' | 'manual';

      interface MandateData {
        /**
         * This hash contains details about the customer acceptance of the Mandate.
         */
        customer_acceptance: MandateData.CustomerAcceptance;
      }

      namespace MandateData {
        interface CustomerAcceptance {
          /**
           * The time at which the customer accepted the Mandate.
           */
          accepted_at?: number;

          /**
           * If this is a Mandate accepted offline, this hash contains details about the offline acceptance.
           */
          offline?: CustomerAcceptance.Offline;

          /**
           * If this is a Mandate accepted online, this hash contains details about the online acceptance.
           */
          online?: CustomerAcceptance.Online;

          /**
           * The type of customer acceptance information included with the Mandate. One of `online` or `offline`.
           */
          type: CustomerAcceptance.Type;
        }

        namespace CustomerAcceptance {
          interface Offline {}

          interface Online {
            /**
             * The IP address from which the Mandate was accepted by the customer.
             */
            ip_address: string;

            /**
             * The user agent of the browser from which the Mandate was accepted by the customer.
             */
            user_agent: string;
          }

          type Type = 'offline' | 'online';
        }
      }

      type OffSession = 'one_off' | 'recurring';

      interface PaymentDetails {
        /**
         * Car rental details for this PaymentIntent.
         */
        car_rental?: PaymentDetails.CarRental;

        /**
         * Event details for this PaymentIntent
         */
        event_details?: PaymentDetails.EventDetails;

        /**
         * Flight reservation details for this PaymentIntent
         */
        flight?: PaymentDetails.Flight;

        /**
         * Lodging reservation details for this PaymentIntent
         */
        lodging?: PaymentDetails.Lodging;

        /**
         * Subscription details for this PaymentIntent
         */
        subscription?: PaymentDetails.Subscription;
      }

      namespace PaymentDetails {
        interface CarRental {
          /**
           * Affiliate details for this purchase.
           */
          affiliate?: CarRental.Affiliate;

          /**
           * The booking number associated with the car rental.
           */
          booking_number: string;

          /**
           * Class code of the car.
           */
          car_class_code?: string;

          /**
           * Make of the car.
           */
          car_make?: string;

          /**
           * Model of the car.
           */
          car_model?: string;

          /**
           * The name of the rental car company.
           */
          company?: string;

          /**
           * The customer service phone number of the car rental company.
           */
          customer_service_phone_number?: string;

          /**
           * Number of days the car is being rented.
           */
          days_rented: number;

          /**
           * Delivery details for this purchase.
           */
          delivery?: CarRental.Delivery;

          /**
           * The details of the passengers in the travel reservation
           */
          drivers?: Array<CarRental.Driver>;

          /**
           * List of additional charges being billed.
           */
          extra_charges?: Array<CarRental.ExtraCharge>;

          /**
           * Indicates if the customer did not keep nor cancel their booking.
           */
          no_show?: boolean;

          /**
           * Car pick-up address.
           */
          pickup_address?: Stripe.AddressParam;

          /**
           * Car pick-up time. Measured in seconds since the Unix epoch.
           */
          pickup_at: number;

          /**
           * Rental rate.
           */
          rate_amount?: number;

          /**
           * The frequency at which the rate amount is applied. One of `day`, `week` or `month`
           */
          rate_interval?: CarRental.RateInterval;

          /**
           * The name of the person or entity renting the car.
           */
          renter_name?: string;

          /**
           * Car return address.
           */
          return_address?: Stripe.AddressParam;

          /**
           * Car return time. Measured in seconds since the Unix epoch.
           */
          return_at: number;

          /**
           * Indicates whether the goods or services are tax-exempt or tax is not collected.
           */
          tax_exempt?: boolean;
        }

        namespace CarRental {
          interface Affiliate {
            /**
             * The name of the affiliate that originated the purchase.
             */
            name: string;
          }

          interface Delivery {
            /**
             * The delivery method for the payment
             */
            mode?: Delivery.Mode;

            /**
             * Details of the recipient.
             */
            recipient?: Delivery.Recipient;
          }

          namespace Delivery {
            type Mode = 'email' | 'phone' | 'pickup' | 'post';

            interface Recipient {
              /**
               * The email of the recipient the ticket is delivered to.
               */
              email?: string;

              /**
               * The name of the recipient the ticket is delivered to.
               */
              name?: string;

              /**
               * The phone number of the recipient the ticket is delivered to.
               */
              phone?: string;
            }
          }

          interface Driver {
            /**
             * Full name of the person or entity on the car reservation.
             */
            name: string;
          }

          type ExtraCharge =
            | 'extra_mileage'
            | 'gas'
            | 'late_return'
            | 'one_way_service'
            | 'parking_violation';

          type RateInterval = 'day' | 'month' | 'week';
        }

        interface EventDetails {
          /**
           * Indicates if the tickets are digitally checked when entering the venue.
           */
          access_controlled_venue?: boolean;

          /**
           * The event location's address.
           */
          address?: Stripe.AddressParam;

          /**
           * Affiliate details for this purchase.
           */
          affiliate?: EventDetails.Affiliate;

          /**
           * The name of the company
           */
          company?: string;

          /**
           * Delivery details for this purchase.
           */
          delivery?: EventDetails.Delivery;

          /**
           * Event end time. Measured in seconds since the Unix epoch.
           */
          ends_at?: number;

          /**
           * Type of the event entertainment (concert, sports event etc)
           */
          genre?: string;

          /**
           * The name of the event.
           */
          name: string;

          /**
           * Event start time. Measured in seconds since the Unix epoch.
           */
          starts_at?: number;
        }

        namespace EventDetails {
          interface Affiliate {
            /**
             * The name of the affiliate that originated the purchase.
             */
            name: string;
          }

          interface Delivery {
            /**
             * The delivery method for the payment
             */
            mode?: Delivery.Mode;

            /**
             * Details of the recipient.
             */
            recipient?: Delivery.Recipient;
          }

          namespace Delivery {
            type Mode = 'email' | 'phone' | 'pickup' | 'post';

            interface Recipient {
              /**
               * The email of the recipient the ticket is delivered to.
               */
              email?: string;

              /**
               * The name of the recipient the ticket is delivered to.
               */
              name?: string;

              /**
               * The phone number of the recipient the ticket is delivered to.
               */
              phone?: string;
            }
          }
        }

        interface Flight {
          /**
           * Affiliate details for this purchase.
           */
          affiliate?: Flight.Affiliate;

          /**
           * The agency number (i.e. International Air Transport Association (IATA) agency number) of the travel agency that made the booking.
           */
          agency_number?: string;

          /**
           * The International Air Transport Association (IATA) carrier code of the carrier that issued the ticket.
           */
          carrier?: string;

          /**
           * Delivery details for this purchase.
           */
          delivery?: Flight.Delivery;

          /**
           * The name of the person or entity on the reservation.
           */
          passenger_name?: string;

          /**
           * The details of the passengers in the travel reservation.
           */
          passengers?: Array<Flight.Passenger>;

          /**
           * The individual flight segments associated with the trip.
           */
          segments: Array<Flight.Segment>;

          /**
           * The ticket number associated with the travel reservation.
           */
          ticket_number?: string;
        }

        namespace Flight {
          interface Affiliate {
            /**
             * The name of the affiliate that originated the purchase.
             */
            name: string;
          }

          interface Delivery {
            /**
             * The delivery method for the payment
             */
            mode?: Delivery.Mode;

            /**
             * Details of the recipient.
             */
            recipient?: Delivery.Recipient;
          }

          namespace Delivery {
            type Mode = 'email' | 'phone' | 'pickup' | 'post';

            interface Recipient {
              /**
               * The email of the recipient the ticket is delivered to.
               */
              email?: string;

              /**
               * The name of the recipient the ticket is delivered to.
               */
              name?: string;

              /**
               * The phone number of the recipient the ticket is delivered to.
               */
              phone?: string;
            }
          }

          interface Passenger {
            /**
             * Full name of the person or entity on the flight reservation.
             */
            name: string;
          }

          interface Segment {
            /**
             * The flight segment amount.
             */
            amount?: number;

            /**
             * The International Air Transport Association (IATA) airport code for the arrival airport.
             */
            arrival_airport?: string;

            /**
             * The arrival time for the flight segment. Measured in seconds since the Unix epoch.
             */
            arrives_at?: number;

            /**
             * The International Air Transport Association (IATA) carrier code of the carrier operating the flight segment.
             */
            carrier?: string;

            /**
             * The departure time for the flight segment. Measured in seconds since the Unix epoch.
             */
            departs_at: number;

            /**
             * The International Air Transport Association (IATA) airport code for the departure airport.
             */
            departure_airport?: string;

            /**
             * The flight number associated with the segment
             */
            flight_number?: string;

            /**
             * The fare class for the segment.
             */
            service_class?: Segment.ServiceClass;
          }

          namespace Segment {
            type ServiceClass =
              | 'business'
              | 'economy'
              | 'first'
              | 'premium_economy';
          }
        }

        interface Lodging {
          /**
           * The lodging location's address.
           */
          address?: Stripe.AddressParam;

          /**
           * The number of adults on the booking
           */
          adults?: number;

          /**
           * Affiliate details for this purchase.
           */
          affiliate?: Lodging.Affiliate;

          /**
           * The booking number associated with the lodging reservation.
           */
          booking_number?: string;

          /**
           * The lodging category
           */
          category?: Lodging.Category;

          /**
           * Loding check-in time. Measured in seconds since the Unix epoch.
           */
          checkin_at: number;

          /**
           * Lodging check-out time. Measured in seconds since the Unix epoch.
           */
          checkout_at: number;

          /**
           * The customer service phone number of the lodging company.
           */
          customer_service_phone_number?: string;

          /**
           * The daily lodging room rate.
           */
          daily_room_rate_amount?: number;

          /**
           * Delivery details for this purchase.
           */
          delivery?: Lodging.Delivery;

          /**
           * List of additional charges being billed.
           */
          extra_charges?: Array<Lodging.ExtraCharge>;

          /**
           * Indicates whether the lodging location is compliant with the Fire Safety Act.
           */
          fire_safety_act_compliance?: boolean;

          /**
           * The name of the lodging location.
           */
          name?: string;

          /**
           * Indicates if the customer did not keep their booking while failing to cancel the reservation.
           */
          no_show?: boolean;

          /**
           * The number of rooms on the booking
           */
          number_of_rooms?: number;

          /**
           * The details of the passengers in the travel reservation
           */
          passengers?: Array<Lodging.Passenger>;

          /**
           * The phone number of the lodging location.
           */
          property_phone_number?: string;

          /**
           * The room class for this purchase.
           */
          room_class?: string;

          /**
           * The number of room nights
           */
          room_nights?: number;

          /**
           * The total tax amount associating with the room reservation.
           */
          total_room_tax_amount?: number;

          /**
           * The total tax amount
           */
          total_tax_amount?: number;
        }

        namespace Lodging {
          interface Affiliate {
            /**
             * The name of the affiliate that originated the purchase.
             */
            name: string;
          }

          type Category = 'hotel' | 'vacation_rental';

          interface Delivery {
            /**
             * The delivery method for the payment
             */
            mode?: Delivery.Mode;

            /**
             * Details of the recipient.
             */
            recipient?: Delivery.Recipient;
          }

          namespace Delivery {
            type Mode = 'email' | 'phone' | 'pickup' | 'post';

            interface Recipient {
              /**
               * The email of the recipient the ticket is delivered to.
               */
              email?: string;

              /**
               * The name of the recipient the ticket is delivered to.
               */
              name?: string;

              /**
               * The phone number of the recipient the ticket is delivered to.
               */
              phone?: string;
            }
          }

          type ExtraCharge =
            | 'gift_shop'
            | 'laundry'
            | 'mini_bar'
            | 'other'
            | 'restaurant'
            | 'telephone';

          interface Passenger {
            /**
             * Full name of the person or entity on the lodging reservation.
             */
            name: string;
          }
        }

        interface Subscription {
          /**
           * Affiliate details for this purchase.
           */
          affiliate?: Subscription.Affiliate;

          /**
           * Info whether the subscription will be auto renewed upon expiry.
           */
          auto_renewal?: boolean;

          /**
           * Subscription billing details for this purchase.
           */
          billing_interval?: Subscription.BillingInterval;

          /**
           * Subscription end time. Measured in seconds since the Unix epoch.
           */
          ends_at?: number;

          /**
           * Name of the product on subscription. e.g. Apple Music Subscription
           */
          name: string;

          /**
           * Subscription start time. Measured in seconds since the Unix epoch.
           */
          starts_at?: number;
        }

        namespace Subscription {
          interface Affiliate {
            /**
             * The name of the affiliate that originated the purchase.
             */
            name: string;
          }

          interface BillingInterval {
            /**
             * The number of intervals, as an whole number greater than 0. Stripe multiplies this by the interval type to get the overall duration.
             */
            count: number;

            /**
             * Specifies a type of interval unit. Either `day`, `week`, `month` or `year`.
             */
            interval: BillingInterval.Interval;
          }

          namespace BillingInterval {
            type Interval = 'day' | 'month' | 'week' | 'year';
          }
        }
      }

      interface PaymentMethodData {
        /**
         * If this is an `acss_debit` PaymentMethod, this hash contains details about the ACSS Debit payment method.
         */
        acss_debit?: PaymentMethodData.AcssDebit;

        /**
         * If this is an `affirm` PaymentMethod, this hash contains details about the Affirm payment method.
         */
        affirm?: PaymentMethodData.Affirm;

        /**
         * If this is an `AfterpayClearpay` PaymentMethod, this hash contains details about the AfterpayClearpay payment method.
         */
        afterpay_clearpay?: PaymentMethodData.AfterpayClearpay;

        /**
         * If this is an `Alipay` PaymentMethod, this hash contains details about the Alipay payment method.
         */
        alipay?: PaymentMethodData.Alipay;

        /**
         * If this is an `au_becs_debit` PaymentMethod, this hash contains details about the bank account.
         */
        au_becs_debit?: PaymentMethodData.AuBecsDebit;

        /**
         * If this is a `bacs_debit` PaymentMethod, this hash contains details about the Bacs Direct Debit bank account.
         */
        bacs_debit?: PaymentMethodData.BacsDebit;

        /**
         * If this is a `bancontact` PaymentMethod, this hash contains details about the Bancontact payment method.
         */
        bancontact?: PaymentMethodData.Bancontact;

        /**
         * Billing information associated with the PaymentMethod that may be used or required by particular types of payment methods.
         */
        billing_details?: PaymentMethodData.BillingDetails;

        /**
         * If this is a `blik` PaymentMethod, this hash contains details about the BLIK payment method.
         */
        blik?: PaymentMethodData.Blik;

        /**
         * If this is a `boleto` PaymentMethod, this hash contains details about the Boleto payment method.
         */
        boleto?: PaymentMethodData.Boleto;

        /**
         * If this is a `cashapp` PaymentMethod, this hash contains details about the Cash App Pay payment method.
         */
        cashapp?: PaymentMethodData.Cashapp;

        /**
         * If this is a `customer_balance` PaymentMethod, this hash contains details about the CustomerBalance payment method.
         */
        customer_balance?: PaymentMethodData.CustomerBalance;

        /**
         * If this is an `eps` PaymentMethod, this hash contains details about the EPS payment method.
         */
        eps?: PaymentMethodData.Eps;

        /**
         * If this is an `fpx` PaymentMethod, this hash contains details about the FPX payment method.
         */
        fpx?: PaymentMethodData.Fpx;

        /**
         * If this is a `giropay` PaymentMethod, this hash contains details about the Giropay payment method.
         */
        giropay?: PaymentMethodData.Giropay;

        /**
         * If this is a `grabpay` PaymentMethod, this hash contains details about the GrabPay payment method.
         */
        grabpay?: PaymentMethodData.Grabpay;

        /**
         * If this is an `ideal` PaymentMethod, this hash contains details about the iDEAL payment method.
         */
        ideal?: PaymentMethodData.Ideal;

        /**
         * If this is an `interac_present` PaymentMethod, this hash contains details about the Interac Present payment method.
         */
        interac_present?: PaymentMethodData.InteracPresent;

        /**
         * If this is a `klarna` PaymentMethod, this hash contains details about the Klarna payment method.
         */
        klarna?: PaymentMethodData.Klarna;

        /**
         * If this is a `konbini` PaymentMethod, this hash contains details about the Konbini payment method.
         */
        konbini?: PaymentMethodData.Konbini;

        /**
         * If this is an `Link` PaymentMethod, this hash contains details about the Link payment method.
         */
        link?: PaymentMethodData.Link;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.MetadataParam;

        /**
         * If this is a `mobilepay` PaymentMethod, this hash contains details about the MobilePay payment method.
         */
        mobilepay?: PaymentMethodData.Mobilepay;

        /**
         * If this is a `multibanco` PaymentMethod, this hash contains details about the Multibanco payment method.
         */
        multibanco?: PaymentMethodData.Multibanco;

        /**
         * If this is an `oxxo` PaymentMethod, this hash contains details about the OXXO payment method.
         */
        oxxo?: PaymentMethodData.Oxxo;

        /**
         * If this is a `p24` PaymentMethod, this hash contains details about the P24 payment method.
         */
        p24?: PaymentMethodData.P24;

        /**
         * If this is a `paynow` PaymentMethod, this hash contains details about the PayNow payment method.
         */
        paynow?: PaymentMethodData.Paynow;

        /**
         * If this is a `paypal` PaymentMethod, this hash contains details about the PayPal payment method.
         */
        paypal?: PaymentMethodData.Paypal;

        /**
         * If this is a `payto` PaymentMethod, this hash contains details about the PayTo payment method.
         */
        payto?: PaymentMethodData.Payto;

        /**
         * If this is a `pix` PaymentMethod, this hash contains details about the Pix payment method.
         */
        pix?: PaymentMethodData.Pix;

        /**
         * If this is a `promptpay` PaymentMethod, this hash contains details about the PromptPay payment method.
         */
        promptpay?: PaymentMethodData.Promptpay;

        /**
         * Options to configure Radar. See [Radar Session](https://stripe.com/docs/radar/radar-session) for more information.
         */
        radar_options?: PaymentMethodData.RadarOptions;

        /**
         * If this is a `Revolut Pay` PaymentMethod, this hash contains details about the Revolut Pay payment method.
         */
        revolut_pay?: PaymentMethodData.RevolutPay;

        /**
         * If this is a `sepa_debit` PaymentMethod, this hash contains details about the SEPA debit bank account.
         */
        sepa_debit?: PaymentMethodData.SepaDebit;

        /**
         * If this is a `sofort` PaymentMethod, this hash contains details about the SOFORT payment method.
         */
        sofort?: PaymentMethodData.Sofort;

        /**
         * If this is a `swish` PaymentMethod, this hash contains details about the Swish payment method.
         */
        swish?: PaymentMethodData.Swish;

        /**
         * If this is a Twint PaymentMethod, this hash contains details about the Twint payment method.
         */
        twint?: PaymentMethodData.Twint;

        /**
         * The type of the PaymentMethod. An additional hash is included on the PaymentMethod with a name matching this value. It contains additional information specific to the PaymentMethod type.
         */
        type: PaymentMethodData.Type;

        /**
         * If this is an `us_bank_account` PaymentMethod, this hash contains details about the US bank account payment method.
         */
        us_bank_account?: PaymentMethodData.UsBankAccount;

        /**
         * If this is an `wechat_pay` PaymentMethod, this hash contains details about the wechat_pay payment method.
         */
        wechat_pay?: PaymentMethodData.WechatPay;

        /**
         * If this is a `zip` PaymentMethod, this hash contains details about the Zip payment method.
         */
        zip?: PaymentMethodData.Zip;
      }

      namespace PaymentMethodData {
        interface AcssDebit {
          /**
           * Customer's bank account number.
           */
          account_number: string;

          /**
           * Institution number of the customer's bank.
           */
          institution_number: string;

          /**
           * Transit number of the customer's bank.
           */
          transit_number: string;
        }

        interface Affirm {}

        interface AfterpayClearpay {}

        interface Alipay {}

        interface AuBecsDebit {
          /**
           * The account number for the bank account.
           */
          account_number: string;

          /**
           * Bank-State-Branch number of the bank account.
           */
          bsb_number: string;
        }

        interface BacsDebit {
          /**
           * Account number of the bank account that the funds will be debited from.
           */
          account_number?: string;

          /**
           * Sort code of the bank account. (e.g., `10-20-30`)
           */
          sort_code?: string;
        }

        interface Bancontact {}

        interface BillingDetails {
          /**
           * Billing address.
           */
          address?: Stripe.Emptyable<Stripe.AddressParam>;

          /**
           * Email address.
           */
          email?: Stripe.Emptyable<string>;

          /**
           * Full name.
           */
          name?: Stripe.Emptyable<string>;

          /**
           * Billing phone number (including extension).
           */
          phone?: Stripe.Emptyable<string>;
        }

        interface Blik {}

        interface Boleto {
          /**
           * The tax ID of the customer (CPF for individual consumers or CNPJ for businesses consumers)
           */
          tax_id: string;
        }

        interface Cashapp {}

        interface CustomerBalance {}

        interface Eps {
          /**
           * The customer's bank.
           */
          bank?: Eps.Bank;
        }

        namespace Eps {
          type Bank =
            | 'arzte_und_apotheker_bank'
            | 'austrian_anadi_bank_ag'
            | 'bank_austria'
            | 'bankhaus_carl_spangler'
            | 'bankhaus_schelhammer_und_schattera_ag'
            | 'bawag_psk_ag'
            | 'bks_bank_ag'
            | 'brull_kallmus_bank_ag'
            | 'btv_vier_lander_bank'
            | 'capital_bank_grawe_gruppe_ag'
            | 'deutsche_bank_ag'
            | 'dolomitenbank'
            | 'easybank_ag'
            | 'erste_bank_und_sparkassen'
            | 'hypo_alpeadriabank_international_ag'
            | 'hypo_bank_burgenland_aktiengesellschaft'
            | 'hypo_noe_lb_fur_niederosterreich_u_wien'
            | 'hypo_oberosterreich_salzburg_steiermark'
            | 'hypo_tirol_bank_ag'
            | 'hypo_vorarlberg_bank_ag'
            | 'marchfelder_bank'
            | 'oberbank_ag'
            | 'raiffeisen_bankengruppe_osterreich'
            | 'schoellerbank_ag'
            | 'sparda_bank_wien'
            | 'volksbank_gruppe'
            | 'volkskreditbank_ag'
            | 'vr_bank_braunau';
        }

        interface Fpx {
          /**
           * Account holder type for FPX transaction
           */
          account_holder_type?: Fpx.AccountHolderType;

          /**
           * The customer's bank.
           */
          bank: Fpx.Bank;
        }

        namespace Fpx {
          type AccountHolderType = 'company' | 'individual';

          type Bank =
            | 'affin_bank'
            | 'agrobank'
            | 'alliance_bank'
            | 'ambank'
            | 'bank_islam'
            | 'bank_muamalat'
            | 'bank_of_china'
            | 'bank_rakyat'
            | 'bsn'
            | 'cimb'
            | 'deutsche_bank'
            | 'hong_leong_bank'
            | 'hsbc'
            | 'kfh'
            | 'maybank2e'
            | 'maybank2u'
            | 'ocbc'
            | 'pb_enterprise'
            | 'public_bank'
            | 'rhb'
            | 'standard_chartered'
            | 'uob';
        }

        interface Giropay {}

        interface Grabpay {}

        interface Ideal {
          /**
           * The customer's bank.
           */
          bank?: Ideal.Bank;
        }

        namespace Ideal {
          type Bank =
            | 'abn_amro'
            | 'asn_bank'
            | 'bunq'
            | 'handelsbanken'
            | 'ing'
            | 'knab'
            | 'moneyou'
            | 'n26'
            | 'nn'
            | 'rabobank'
            | 'regiobank'
            | 'revolut'
            | 'sns_bank'
            | 'triodos_bank'
            | 'van_lanschot'
            | 'yoursafe';
        }

        interface InteracPresent {}

        interface Klarna {
          /**
           * Customer's date of birth
           */
          dob?: Klarna.Dob;
        }

        namespace Klarna {
          interface Dob {
            /**
             * The day of birth, between 1 and 31.
             */
            day: number;

            /**
             * The month of birth, between 1 and 12.
             */
            month: number;

            /**
             * The four-digit year of birth.
             */
            year: number;
          }
        }

        interface Konbini {}

        interface Link {}

        interface Mobilepay {}

        interface Multibanco {}

        interface Oxxo {}

        interface P24 {
          /**
           * The customer's bank.
           */
          bank?: P24.Bank;
        }

        namespace P24 {
          type Bank =
            | 'alior_bank'
            | 'bank_millennium'
            | 'bank_nowy_bfg_sa'
            | 'bank_pekao_sa'
            | 'banki_spbdzielcze'
            | 'blik'
            | 'bnp_paribas'
            | 'boz'
            | 'citi_handlowy'
            | 'credit_agricole'
            | 'envelobank'
            | 'etransfer_pocztowy24'
            | 'getin_bank'
            | 'ideabank'
            | 'ing'
            | 'inteligo'
            | 'mbank_mtransfer'
            | 'nest_przelew'
            | 'noble_pay'
            | 'pbac_z_ipko'
            | 'plus_bank'
            | 'santander_przelew24'
            | 'tmobile_usbugi_bankowe'
            | 'toyota_bank'
            | 'velobank'
            | 'volkswagen_bank';
        }

        interface Paynow {}

        interface Paypal {}

        interface Payto {
          /**
           * The account number for the bank account.
           */
          account_number?: string;

          /**
           * Bank-State-Branch number of the bank account.
           */
          bsb_number?: string;

          /**
           * The PayID alias for the bank account.
           */
          pay_id?: string;
        }

        interface Pix {}

        interface Promptpay {}

        interface RadarOptions {
          /**
           * A [Radar Session](https://stripe.com/docs/radar/radar-session) is a snapshot of the browser metadata and device details that help Radar make more accurate predictions on your payments.
           */
          session?: string;
        }

        interface RevolutPay {}

        interface SepaDebit {
          /**
           * IBAN of the bank account.
           */
          iban: string;
        }

        interface Sofort {
          /**
           * Two-letter ISO code representing the country the bank account is located in.
           */
          country: Sofort.Country;
        }

        namespace Sofort {
          type Country = 'AT' | 'BE' | 'DE' | 'ES' | 'IT' | 'NL';
        }

        interface Swish {}

        interface Twint {}

        type Type =
          | 'acss_debit'
          | 'affirm'
          | 'afterpay_clearpay'
          | 'alipay'
          | 'au_becs_debit'
          | 'bacs_debit'
          | 'bancontact'
          | 'blik'
          | 'boleto'
          | 'cashapp'
          | 'customer_balance'
          | 'eps'
          | 'fpx'
          | 'giropay'
          | 'grabpay'
          | 'ideal'
          | 'klarna'
          | 'konbini'
          | 'link'
          | 'mobilepay'
          | 'multibanco'
          | 'oxxo'
          | 'p24'
          | 'paynow'
          | 'paypal'
          | 'payto'
          | 'pix'
          | 'promptpay'
          | 'revolut_pay'
          | 'sepa_debit'
          | 'sofort'
          | 'swish'
          | 'twint'
          | 'us_bank_account'
          | 'wechat_pay'
          | 'zip';

        interface UsBankAccount {
          /**
           * Account holder type: individual or company.
           */
          account_holder_type?: UsBankAccount.AccountHolderType;

          /**
           * Account number of the bank account.
           */
          account_number?: string;

          /**
           * Account type: checkings or savings. Defaults to checking if omitted.
           */
          account_type?: UsBankAccount.AccountType;

          /**
           * The ID of a Financial Connections Account to use as a payment method.
           */
          financial_connections_account?: string;

          /**
           * Routing number of the bank account.
           */
          routing_number?: string;
        }

        namespace UsBankAccount {
          type AccountHolderType = 'company' | 'individual';

          type AccountType = 'checking' | 'savings';
        }

        interface WechatPay {}

        interface Zip {}
      }

      interface PaymentMethodOptions {
        /**
         * If this is a `acss_debit` PaymentMethod, this sub-hash contains details about the ACSS Debit payment method options.
         */
        acss_debit?: Stripe.Emptyable<PaymentMethodOptions.AcssDebit>;

        /**
         * If this is an `affirm` PaymentMethod, this sub-hash contains details about the Affirm payment method options.
         */
        affirm?: Stripe.Emptyable<PaymentMethodOptions.Affirm>;

        /**
         * If this is a `afterpay_clearpay` PaymentMethod, this sub-hash contains details about the Afterpay Clearpay payment method options.
         */
        afterpay_clearpay?: Stripe.Emptyable<
          PaymentMethodOptions.AfterpayClearpay
        >;

        /**
         * If this is a `alipay` PaymentMethod, this sub-hash contains details about the Alipay payment method options.
         */
        alipay?: Stripe.Emptyable<PaymentMethodOptions.Alipay>;

        /**
         * If this is a `au_becs_debit` PaymentMethod, this sub-hash contains details about the AU BECS Direct Debit payment method options.
         */
        au_becs_debit?: Stripe.Emptyable<PaymentMethodOptions.AuBecsDebit>;

        /**
         * If this is a `bacs_debit` PaymentMethod, this sub-hash contains details about the BACS Debit payment method options.
         */
        bacs_debit?: Stripe.Emptyable<PaymentMethodOptions.BacsDebit>;

        /**
         * If this is a `bancontact` PaymentMethod, this sub-hash contains details about the Bancontact payment method options.
         */
        bancontact?: Stripe.Emptyable<PaymentMethodOptions.Bancontact>;

        /**
         * If this is a `blik` PaymentMethod, this sub-hash contains details about the BLIK payment method options.
         */
        blik?: Stripe.Emptyable<PaymentMethodOptions.Blik>;

        /**
         * If this is a `boleto` PaymentMethod, this sub-hash contains details about the Boleto payment method options.
         */
        boleto?: Stripe.Emptyable<PaymentMethodOptions.Boleto>;

        /**
         * Configuration for any card payments attempted on this PaymentIntent.
         */
        card?: Stripe.Emptyable<PaymentMethodOptions.Card>;

        /**
         * If this is a `card_present` PaymentMethod, this sub-hash contains details about the Card Present payment method options.
         */
        card_present?: Stripe.Emptyable<PaymentMethodOptions.CardPresent>;

        /**
         * If this is a `cashapp` PaymentMethod, this sub-hash contains details about the Cash App Pay payment method options.
         */
        cashapp?: Stripe.Emptyable<PaymentMethodOptions.Cashapp>;

        /**
         * If this is a `customer balance` PaymentMethod, this sub-hash contains details about the customer balance payment method options.
         */
        customer_balance?: Stripe.Emptyable<
          PaymentMethodOptions.CustomerBalance
        >;

        /**
         * If this is a `eps` PaymentMethod, this sub-hash contains details about the EPS payment method options.
         */
        eps?: Stripe.Emptyable<PaymentMethodOptions.Eps>;

        /**
         * If this is a `fpx` PaymentMethod, this sub-hash contains details about the FPX payment method options.
         */
        fpx?: Stripe.Emptyable<PaymentMethodOptions.Fpx>;

        /**
         * If this is a `giropay` PaymentMethod, this sub-hash contains details about the Giropay payment method options.
         */
        giropay?: Stripe.Emptyable<PaymentMethodOptions.Giropay>;

        /**
         * If this is a `grabpay` PaymentMethod, this sub-hash contains details about the Grabpay payment method options.
         */
        grabpay?: Stripe.Emptyable<PaymentMethodOptions.Grabpay>;

        /**
         * If this is a `ideal` PaymentMethod, this sub-hash contains details about the Ideal payment method options.
         */
        ideal?: Stripe.Emptyable<PaymentMethodOptions.Ideal>;

        /**
         * If this is a `interac_present` PaymentMethod, this sub-hash contains details about the Card Present payment method options.
         */
        interac_present?: Stripe.Emptyable<PaymentMethodOptions.InteracPresent>;

        /**
         * If this is a `klarna` PaymentMethod, this sub-hash contains details about the Klarna payment method options.
         */
        klarna?: Stripe.Emptyable<PaymentMethodOptions.Klarna>;

        /**
         * If this is a `konbini` PaymentMethod, this sub-hash contains details about the Konbini payment method options.
         */
        konbini?: Stripe.Emptyable<PaymentMethodOptions.Konbini>;

        /**
         * If this is a `link` PaymentMethod, this sub-hash contains details about the Link payment method options.
         */
        link?: Stripe.Emptyable<PaymentMethodOptions.Link>;

        /**
         * If this is a `MobilePay` PaymentMethod, this sub-hash contains details about the MobilePay payment method options.
         */
        mobilepay?: Stripe.Emptyable<PaymentMethodOptions.Mobilepay>;

        /**
         * If this is a `multibanco` PaymentMethod, this sub-hash contains details about the Multibanco payment method options.
         */
        multibanco?: Stripe.Emptyable<PaymentMethodOptions.Multibanco>;

        /**
         * If this is a `oxxo` PaymentMethod, this sub-hash contains details about the OXXO payment method options.
         */
        oxxo?: Stripe.Emptyable<PaymentMethodOptions.Oxxo>;

        /**
         * If this is a `p24` PaymentMethod, this sub-hash contains details about the Przelewy24 payment method options.
         */
        p24?: Stripe.Emptyable<PaymentMethodOptions.P24>;

        /**
         * If this is a `paynow` PaymentMethod, this sub-hash contains details about the PayNow payment method options.
         */
        paynow?: Stripe.Emptyable<PaymentMethodOptions.Paynow>;

        /**
         * If this is a `paypal` PaymentMethod, this sub-hash contains details about the PayPal payment method options.
         */
        paypal?: Stripe.Emptyable<PaymentMethodOptions.Paypal>;

        /**
         * If this is a `payto` PaymentMethod, this sub-hash contains details about the PayTo payment method options.
         */
        payto?: Stripe.Emptyable<PaymentMethodOptions.Payto>;

        /**
         * If this is a `pix` PaymentMethod, this sub-hash contains details about the Pix payment method options.
         */
        pix?: Stripe.Emptyable<PaymentMethodOptions.Pix>;

        /**
         * If this is a `promptpay` PaymentMethod, this sub-hash contains details about the PromptPay payment method options.
         */
        promptpay?: Stripe.Emptyable<PaymentMethodOptions.Promptpay>;

        /**
         * If this is a `revolut_pay` PaymentMethod, this sub-hash contains details about the Revolut Pay payment method options.
         */
        revolut_pay?: Stripe.Emptyable<PaymentMethodOptions.RevolutPay>;

        /**
         * If this is a `sepa_debit` PaymentIntent, this sub-hash contains details about the SEPA Debit payment method options.
         */
        sepa_debit?: Stripe.Emptyable<PaymentMethodOptions.SepaDebit>;

        /**
         * If this is a `sofort` PaymentMethod, this sub-hash contains details about the SOFORT payment method options.
         */
        sofort?: Stripe.Emptyable<PaymentMethodOptions.Sofort>;

        /**
         * If this is a `Swish` PaymentMethod, this sub-hash contains details about the Swish payment method options.
         */
        swish?: Stripe.Emptyable<PaymentMethodOptions.Swish>;

        /**
         * If this is a `us_bank_account` PaymentMethod, this sub-hash contains details about the US bank account payment method options.
         */
        us_bank_account?: Stripe.Emptyable<PaymentMethodOptions.UsBankAccount>;

        /**
         * If this is a `wechat_pay` PaymentMethod, this sub-hash contains details about the WeChat Pay payment method options.
         */
        wechat_pay?: Stripe.Emptyable<PaymentMethodOptions.WechatPay>;

        /**
         * If this is a `zip` PaymentMethod, this sub-hash contains details about the Zip payment method options.
         */
        zip?: Stripe.Emptyable<PaymentMethodOptions.Zip>;
      }

      namespace PaymentMethodOptions {
        interface AcssDebit {
          /**
           * Additional fields for Mandate creation
           */
          mandate_options?: AcssDebit.MandateOptions;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Stripe.Emptyable<AcssDebit.SetupFutureUsage>;

          /**
           * Bank account verification method.
           */
          verification_method?: AcssDebit.VerificationMethod;
        }

        namespace AcssDebit {
          interface MandateOptions {
            /**
             * A URL for custom mandate text to render during confirmation step.
             * The URL will be rendered with additional GET parameters `payment_intent` and `payment_intent_client_secret` when confirming a Payment Intent,
             * or `setup_intent` and `setup_intent_client_secret` when confirming a Setup Intent.
             */
            custom_mandate_url?: Stripe.Emptyable<string>;

            /**
             * Description of the mandate interval. Only required if 'payment_schedule' parameter is 'interval' or 'combined'.
             */
            interval_description?: string;

            /**
             * Payment schedule for the mandate.
             */
            payment_schedule?: MandateOptions.PaymentSchedule;

            /**
             * Transaction type of the mandate.
             */
            transaction_type?: MandateOptions.TransactionType;
          }

          namespace MandateOptions {
            type PaymentSchedule = 'combined' | 'interval' | 'sporadic';

            type TransactionType = 'business' | 'personal';
          }

          type SetupFutureUsage = 'none' | 'off_session' | 'on_session';

          type VerificationMethod = 'automatic' | 'instant' | 'microdeposits';
        }

        interface Affirm {
          /**
           * Controls when the funds will be captured from the customer's account.
           *
           * If provided, this parameter will override the top level behavior of `capture_method` when finalizing the payment with this payment method type.
           *
           * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter will unset the stored value for this payment method type.
           */
          capture_method?: Stripe.Emptyable<'manual'>;

          /**
           * Preferred language of the Affirm authorization page that the customer is redirected to.
           */
          preferred_locale?: string;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        interface AfterpayClearpay {
          /**
           * Controls when the funds will be captured from the customer's account.
           *
           * If provided, this parameter will override the top level behavior of `capture_method` when finalizing the payment with this payment method type.
           *
           * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter will unset the stored value for this payment method type.
           */
          capture_method?: Stripe.Emptyable<'manual'>;

          /**
           * An internal identifier or reference that this payment corresponds to. You must limit the identifier to 128 characters, and it can only contain letters, numbers, underscores, backslashes, and dashes.
           * This field differs from the statement descriptor and item name.
           */
          reference?: string;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        interface Alipay {
          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Stripe.Emptyable<Alipay.SetupFutureUsage>;
        }

        namespace Alipay {
          type SetupFutureUsage = 'none' | 'off_session';
        }

        interface AuBecsDebit {
          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Stripe.Emptyable<AuBecsDebit.SetupFutureUsage>;
        }

        namespace AuBecsDebit {
          type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
        }

        interface BacsDebit {
          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Stripe.Emptyable<BacsDebit.SetupFutureUsage>;
        }

        namespace BacsDebit {
          type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
        }

        interface Bancontact {
          /**
           * Preferred language of the Bancontact authorization page that the customer is redirected to.
           */
          preferred_language?: Bancontact.PreferredLanguage;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Stripe.Emptyable<Bancontact.SetupFutureUsage>;
        }

        namespace Bancontact {
          type PreferredLanguage = 'de' | 'en' | 'fr' | 'nl';

          type SetupFutureUsage = 'none' | 'off_session';
        }

        interface Blik {
          /**
           * The 6-digit BLIK code that a customer has generated using their banking application. Can only be set on confirmation.
           */
          code?: string;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Stripe.Emptyable<'none'>;
        }

        interface Boleto {
          /**
           * The number of calendar days before a Boleto voucher expires. For example, if you create a Boleto voucher on Monday and you set expires_after_days to 2, the Boleto invoice will expire on Wednesday at 23:59 America/Sao_Paulo time.
           */
          expires_after_days?: number;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Stripe.Emptyable<Boleto.SetupFutureUsage>;
        }

        namespace Boleto {
          type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
        }

        interface Card {
          /**
           * Controls when the funds will be captured from the customer's account.
           *
           * If provided, this parameter will override the top level behavior of `capture_method` when finalizing the payment with this payment method type.
           *
           * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter will unset the stored value for this payment method type.
           */
          capture_method?: Stripe.Emptyable<'manual'>;

          /**
           * A single-use `cvc_update` Token that represents a card CVC value. When provided, the CVC value will be verified during the card payment attempt. This parameter can only be provided during confirmation.
           */
          cvc_token?: string;

          /**
           * Installment configuration for payments attempted on this PaymentIntent (Mexico Only).
           *
           * For more information, see the [installments integration guide](https://stripe.com/docs/payments/installments).
           */
          installments?: Card.Installments;

          /**
           * Configuration options for setting up an eMandate for cards issued in India.
           */
          mandate_options?: Card.MandateOptions;

          /**
           * When specified, this parameter indicates that a transaction will be marked
           * as MOTO (Mail Order Telephone Order) and thus out of scope for SCA. This
           * parameter can only be provided during confirmation.
           */
          moto?: boolean;

          /**
           * Selected network to process this PaymentIntent on. Depends on the available networks of the card attached to the PaymentIntent. Can be only set confirm-time.
           */
          network?: Card.Network;

          /**
           * Request ability to [decrement the authorization](https://stripe.com/docs/payments/decremental-authorization) for this PaymentIntent.
           */
          request_decremental_authorization?: Card.RequestDecrementalAuthorization;

          /**
           * Request ability to [capture beyond the standard authorization validity window](https://stripe.com/docs/payments/extended-authorization) for this PaymentIntent.
           */
          request_extended_authorization?: Card.RequestExtendedAuthorization;

          /**
           * Request ability to [increment the authorization](https://stripe.com/docs/payments/incremental-authorization) for this PaymentIntent.
           */
          request_incremental_authorization?: Card.RequestIncrementalAuthorization;

          /**
           * Request ability to make [multiple captures](https://stripe.com/docs/payments/multicapture) for this PaymentIntent.
           */
          request_multicapture?: Card.RequestMulticapture;

          /**
           * Request ability to [overcapture](https://stripe.com/docs/payments/overcapture) for this PaymentIntent.
           */
          request_overcapture?: Card.RequestOvercapture;

          /**
           * We strongly recommend that you rely on our SCA Engine to automatically prompt your customers for authentication based on risk level and [other requirements](https://stripe.com/docs/strong-customer-authentication). However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option. If not provided, this value defaults to `automatic`. Read our guide on [manually requesting 3D Secure](https://stripe.com/docs/payments/3d-secure/authentication-flow#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine.
           */
          request_three_d_secure?: Card.RequestThreeDSecure;

          /**
           * When enabled, using a card that is attached to a customer will require the CVC to be provided again (i.e. using the cvc_token parameter).
           */
          require_cvc_recollection?: boolean;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Stripe.Emptyable<Card.SetupFutureUsage>;

          /**
           * Provides information about a card payment that customers see on their statements. Concatenated with the Kana prefix (shortened Kana descriptor) or Kana statement descriptor that's set on the account to form the complete statement descriptor. Maximum 22 characters. On card statements, the *concatenation* of both prefix and suffix (including separators) will appear truncated to 22 characters.
           */
          statement_descriptor_suffix_kana?: Stripe.Emptyable<string>;

          /**
           * Provides information about a card payment that customers see on their statements. Concatenated with the Kanji prefix (shortened Kanji descriptor) or Kanji statement descriptor that's set on the account to form the complete statement descriptor. Maximum 17 characters. On card statements, the *concatenation* of both prefix and suffix (including separators) will appear truncated to 17 characters.
           */
          statement_descriptor_suffix_kanji?: Stripe.Emptyable<string>;

          /**
           * Statement details for this payment intent. You can use this to override the merchant details shown on your customers' statements.
           */
          statement_details?: Stripe.Emptyable<Card.StatementDetails>;

          /**
           * If 3D Secure authentication was performed with a third-party provider,
           * the authentication details to use for this payment.
           */
          three_d_secure?: Card.ThreeDSecure;
        }

        namespace Card {
          interface Installments {
            /**
             * Setting to true enables installments for this PaymentIntent.
             * This will cause the response to contain a list of available installment plans.
             * Setting to false will prevent any selected plan from applying to a charge.
             */
            enabled?: boolean;

            /**
             * The selected installment plan to use for this payment attempt.
             * This parameter can only be provided during confirmation.
             */
            plan?: Stripe.Emptyable<Installments.Plan>;
          }

          namespace Installments {
            interface Plan {
              /**
               * For `fixed_count` installment plans, this is the number of installment payments your customer will make to their credit card.
               */
              count: number;

              /**
               * For `fixed_count` installment plans, this is the interval between installment payments your customer will make to their credit card.
               * One of `month`.
               */
              interval: 'month';

              /**
               * Type of installment plan, one of `fixed_count`.
               */
              type: 'fixed_count';
            }
          }

          interface MandateOptions {
            /**
             * Amount to be charged for future payments.
             */
            amount: number;

            /**
             * One of `fixed` or `maximum`. If `fixed`, the `amount` param refers to the exact amount to be charged in future payments. If `maximum`, the amount charged can be up to the value passed for the `amount` param.
             */
            amount_type: MandateOptions.AmountType;

            /**
             * A description of the mandate or subscription that is meant to be displayed to the customer.
             */
            description?: string;

            /**
             * End date of the mandate or subscription. If not provided, the mandate will be active until canceled. If provided, end date should be after start date.
             */
            end_date?: number;

            /**
             * Specifies payment frequency. One of `day`, `week`, `month`, `year`, or `sporadic`.
             */
            interval: MandateOptions.Interval;

            /**
             * The number of intervals between payments. For example, `interval=month` and `interval_count=3` indicates one payment every three months. Maximum of one year interval allowed (1 year, 12 months, or 52 weeks). This parameter is optional when `interval=sporadic`.
             */
            interval_count?: number;

            /**
             * Unique identifier for the mandate or subscription.
             */
            reference: string;

            /**
             * Start date of the mandate or subscription. Start date should not be lesser than yesterday.
             */
            start_date: number;

            /**
             * Specifies the type of mandates supported. Possible values are `india`.
             */
            supported_types?: Array<'india'>;
          }

          namespace MandateOptions {
            type AmountType = 'fixed' | 'maximum';

            type Interval = 'day' | 'month' | 'sporadic' | 'week' | 'year';
          }

          type Network =
            | 'amex'
            | 'cartes_bancaires'
            | 'diners'
            | 'discover'
            | 'eftpos_au'
            | 'interac'
            | 'jcb'
            | 'mastercard'
            | 'unionpay'
            | 'unknown'
            | 'visa';

          type RequestDecrementalAuthorization = 'if_available' | 'never';

          type RequestExtendedAuthorization = 'if_available' | 'never';

          type RequestIncrementalAuthorization = 'if_available' | 'never';

          type RequestMulticapture = 'if_available' | 'never';

          type RequestOvercapture = 'if_available' | 'never';

          type RequestThreeDSecure = 'any' | 'automatic' | 'challenge';

          type SetupFutureUsage = 'none' | 'off_session' | 'on_session';

          interface StatementDetails {
            /**
             * Please pass in an address that is within your Stripe user account country
             */
            address?: Stripe.AddressParam;

            /**
             * Phone number (e.g., a toll-free number that customers can call)
             */
            phone?: string;
          }

          interface ThreeDSecure {
            /**
             * The `transStatus` returned from the card Issuer's ACS in the ARes.
             */
            ares_trans_status?: ThreeDSecure.AresTransStatus;

            /**
             * The cryptogram, also known as the "authentication value" (AAV, CAVV or
             * AEVV). This value is 20 bytes, base64-encoded into a 28-character string.
             * (Most 3D Secure providers will return the base64-encoded version, which
             * is what you should specify here.)
             */
            cryptogram: string;

            /**
             * The Electronic Commerce Indicator (ECI) is returned by your 3D Secure
             * provider and indicates what degree of authentication was performed.
             */
            electronic_commerce_indicator?: ThreeDSecure.ElectronicCommerceIndicator;

            /**
             * The exemption requested via 3DS and accepted by the issuer at authentication time.
             */
            exemption_indicator?: ThreeDSecure.ExemptionIndicator;

            /**
             * Network specific 3DS fields. Network specific arguments require an
             * explicit card brand choice. The parameter `payment_method_options.card.network``
             * must be populated accordingly
             */
            network_options?: ThreeDSecure.NetworkOptions;

            /**
             * The challenge indicator (`threeDSRequestorChallengeInd`) which was requested in the
             * AReq sent to the card Issuer's ACS. A string containing 2 digits from 01-99.
             */
            requestor_challenge_indicator?: string;

            /**
             * For 3D Secure 1, the XID. For 3D Secure 2, the Directory Server
             * Transaction ID (dsTransID).
             */
            transaction_id: string;

            /**
             * The version of 3D Secure that was performed.
             */
            version: ThreeDSecure.Version;
          }

          namespace ThreeDSecure {
            type AresTransStatus = 'A' | 'C' | 'I' | 'N' | 'R' | 'U' | 'Y';

            type ElectronicCommerceIndicator = '01' | '02' | '05' | '06' | '07';

            type ExemptionIndicator = 'low_risk' | 'none';

            interface NetworkOptions {
              /**
               * Cartes Bancaires-specific 3DS fields.
               */
              cartes_bancaires?: NetworkOptions.CartesBancaires;
            }

            namespace NetworkOptions {
              interface CartesBancaires {
                /**
                 * The cryptogram calculation algorithm used by the card Issuer's ACS
                 * to calculate the Authentication cryptogram. Also known as `cavvAlgorithm`.
                 * messageExtension: CB-AVALGO
                 */
                cb_avalgo: CartesBancaires.CbAvalgo;

                /**
                 * The exemption indicator returned from Cartes Bancaires in the ARes.
                 * message extension: CB-EXEMPTION; string (4 characters)
                 * This is a 3 byte bitmap (low significant byte first and most significant
                 * bit first) that has been Base64 encoded
                 */
                cb_exemption?: string;

                /**
                 * The risk score returned from Cartes Bancaires in the ARes.
                 * message extension: CB-SCORE; numeric value 0-99
                 */
                cb_score?: number;
              }

              namespace CartesBancaires {
                type CbAvalgo = '0' | '1' | '2' | '3' | '4' | 'A';
              }
            }

            type Version = '1.0.2' | '2.1.0' | '2.2.0';
          }
        }

        interface CardPresent {
          /**
           * Request ability to capture this payment beyond the standard [authorization validity window](https://stripe.com/docs/terminal/features/extended-authorizations#authorization-validity)
           */
          request_extended_authorization?: boolean;

          /**
           * Request ability to [increment](https://stripe.com/docs/terminal/features/incremental-authorizations) this PaymentIntent if the combination of MCC and card brand is eligible. Check [incremental_authorization_supported](https://stripe.com/docs/api/charges/object#charge_object-payment_method_details-card_present-incremental_authorization_supported) in the [Confirm](https://stripe.com/docs/api/payment_intents/confirm) response to verify support.
           */
          request_incremental_authorization_support?: boolean;

          /**
           * This field was released by mistake and will be removed in the next major version
           */
          request_incremental_authorization?: CardPresent.RequestIncrementalAuthorization;
        }

        namespace CardPresent {
          type RequestIncrementalAuthorization = 'if_available' | 'never';
        }

        interface Cashapp {
          /**
           * Controls when the funds will be captured from the customer's account.
           *
           * If provided, this parameter will override the top level behavior of `capture_method` when finalizing the payment with this payment method type.
           *
           * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter will unset the stored value for this payment method type.
           */
          capture_method?: Stripe.Emptyable<'manual'>;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Stripe.Emptyable<Cashapp.SetupFutureUsage>;
        }

        namespace Cashapp {
          type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
        }

        interface CustomerBalance {
          /**
           * Configuration for the bank transfer funding type, if the `funding_type` is set to `bank_transfer`.
           */
          bank_transfer?: CustomerBalance.BankTransfer;

          /**
           * The funding method type to be used when there are not enough funds in the customer balance. Permitted values include: `bank_transfer`.
           */
          funding_type?: 'bank_transfer';

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        namespace CustomerBalance {
          interface BankTransfer {
            /**
             * Configuration for the eu_bank_transfer funding type.
             */
            eu_bank_transfer?: BankTransfer.EuBankTransfer;

            /**
             * List of address types that should be returned in the financial_addresses response. If not specified, all valid types will be returned.
             *
             * Permitted values include: `sort_code`, `zengin`, `iban`, or `spei`.
             */
            requested_address_types?: Array<BankTransfer.RequestedAddressType>;

            /**
             * The list of bank transfer types that this PaymentIntent is allowed to use for funding Permitted values include: `eu_bank_transfer`, `gb_bank_transfer`, `jp_bank_transfer`, `mx_bank_transfer`, or `us_bank_transfer`.
             */
            type: BankTransfer.Type;
          }

          namespace BankTransfer {
            interface EuBankTransfer {
              /**
               * The desired country code of the bank account information. Permitted values include: `BE`, `DE`, `ES`, `FR`, `IE`, or `NL`.
               */
              country: string;
            }

            type RequestedAddressType =
              | 'aba'
              | 'iban'
              | 'sepa'
              | 'sort_code'
              | 'spei'
              | 'swift'
              | 'zengin';

            type Type =
              | 'eu_bank_transfer'
              | 'gb_bank_transfer'
              | 'jp_bank_transfer'
              | 'mx_bank_transfer'
              | 'us_bank_transfer';
          }
        }

        interface Eps {
          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        interface Fpx {
          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        interface Giropay {
          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        interface Grabpay {
          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        interface Ideal {
          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Stripe.Emptyable<Ideal.SetupFutureUsage>;
        }

        namespace Ideal {
          type SetupFutureUsage = 'none' | 'off_session';
        }

        interface InteracPresent {}

        interface Klarna {
          /**
           * Controls when the funds will be captured from the customer's account.
           *
           * If provided, this parameter will override the top level behavior of `capture_method` when finalizing the payment with this payment method type.
           *
           * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter will unset the stored value for this payment method type.
           */
          capture_method?: Stripe.Emptyable<'manual'>;

          /**
           * Preferred language of the Klarna authorization page that the customer is redirected to
           */
          preferred_locale?: Klarna.PreferredLocale;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        namespace Klarna {
          type PreferredLocale =
            | 'cs-CZ'
            | 'da-DK'
            | 'de-AT'
            | 'de-CH'
            | 'de-DE'
            | 'el-GR'
            | 'en-AT'
            | 'en-AU'
            | 'en-BE'
            | 'en-CA'
            | 'en-CH'
            | 'en-CZ'
            | 'en-DE'
            | 'en-DK'
            | 'en-ES'
            | 'en-FI'
            | 'en-FR'
            | 'en-GB'
            | 'en-GR'
            | 'en-IE'
            | 'en-IT'
            | 'en-NL'
            | 'en-NO'
            | 'en-NZ'
            | 'en-PL'
            | 'en-PT'
            | 'en-SE'
            | 'en-US'
            | 'es-ES'
            | 'es-US'
            | 'fi-FI'
            | 'fr-BE'
            | 'fr-CA'
            | 'fr-CH'
            | 'fr-FR'
            | 'it-CH'
            | 'it-IT'
            | 'nb-NO'
            | 'nl-BE'
            | 'nl-NL'
            | 'pl-PL'
            | 'pt-PT'
            | 'sv-FI'
            | 'sv-SE';
        }

        interface Konbini {
          /**
           * An optional 10 to 11 digit numeric-only string determining the confirmation code at applicable convenience stores. Must not consist of only zeroes and could be rejected in case of insufficient uniqueness. We recommend to use the customer's phone number.
           */
          confirmation_number?: Stripe.Emptyable<string>;

          /**
           * The number of calendar days (between 1 and 60) after which Konbini payment instructions will expire. For example, if a PaymentIntent is confirmed with Konbini and `expires_after_days` set to 2 on Monday JST, the instructions will expire on Wednesday 23:59:59 JST. Defaults to 3 days.
           */
          expires_after_days?: Stripe.Emptyable<number>;

          /**
           * The timestamp at which the Konbini payment instructions will expire. Only one of `expires_after_days` or `expires_at` may be set.
           */
          expires_at?: Stripe.Emptyable<number>;

          /**
           * A product descriptor of up to 22 characters, which will appear to customers at the convenience store.
           */
          product_description?: Stripe.Emptyable<string>;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        interface Link {
          /**
           * Controls when the funds will be captured from the customer's account.
           *
           * If provided, this parameter will override the top level behavior of `capture_method` when finalizing the payment with this payment method type.
           *
           * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter will unset the stored value for this payment method type.
           */
          capture_method?: Stripe.Emptyable<'manual'>;

          /**
           * [Deprecated] This is a legacy parameter that no longer has any function.
           */
          persistent_token?: string;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Stripe.Emptyable<Link.SetupFutureUsage>;
        }

        namespace Link {
          type SetupFutureUsage = 'none' | 'off_session';
        }

        interface Mobilepay {
          /**
           * Controls when the funds will be captured from the customer's account.
           *
           * If provided, this parameter will override the top level behavior of `capture_method` when finalizing the payment with this payment method type.
           *
           * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter will unset the stored value for this payment method type.
           */
          capture_method?: Stripe.Emptyable<'manual'>;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        interface Multibanco {
          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        interface Oxxo {
          /**
           * The number of calendar days before an OXXO voucher expires. For example, if you create an OXXO voucher on Monday and you set expires_after_days to 2, the OXXO invoice will expire on Wednesday at 23:59 America/Mexico_City time.
           */
          expires_after_days?: number;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        interface P24 {
          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';

          /**
           * Confirm that the payer has accepted the P24 terms and conditions.
           */
          tos_shown_and_accepted?: boolean;
        }

        interface Paynow {
          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        interface Paypal {
          /**
           * Controls when the funds will be captured from the customer's account.
           */
          capture_method?: Stripe.Emptyable<'manual'>;

          /**
           * [Preferred locale](https://stripe.com/docs/payments/paypal/supported-locales) of the PayPal checkout page that the customer is redirected to.
           */
          preferred_locale?: Paypal.PreferredLocale;

          /**
           * A reference of the PayPal transaction visible to customer which is mapped to PayPal's invoice ID. This must be a globally unique ID if you have configured in your PayPal settings to block multiple payments per invoice ID.
           */
          reference?: string;

          /**
           * A reference of the PayPal transaction visible to customer which is mapped to PayPal's invoice ID. This must be a globally unique ID if you have configured in your PayPal settings to block multiple payments per invoice ID.
           */
          reference_id?: string;

          /**
           * The risk correlation ID for an on-session payment using a saved PayPal payment method.
           */
          risk_correlation_id?: string;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Stripe.Emptyable<Paypal.SetupFutureUsage>;

          /**
           * The Stripe connected account IDs of the sellers on the platform for this transaction (optional). Only allowed when [separate charges and transfers](https://stripe.com/docs/connect/separate-charges-and-transfers) are used.
           */
          subsellers?: Array<string>;
        }

        namespace Paypal {
          type PreferredLocale =
            | 'cs-CZ'
            | 'da-DK'
            | 'de-AT'
            | 'de-DE'
            | 'de-LU'
            | 'el-GR'
            | 'en-GB'
            | 'en-US'
            | 'es-ES'
            | 'fi-FI'
            | 'fr-BE'
            | 'fr-FR'
            | 'fr-LU'
            | 'hu-HU'
            | 'it-IT'
            | 'nl-BE'
            | 'nl-NL'
            | 'pl-PL'
            | 'pt-PT'
            | 'sk-SK'
            | 'sv-SE';

          type SetupFutureUsage = 'none' | 'off_session';
        }

        interface Payto {
          /**
           * Additional fields for Mandate creation. Only `purpose` field is configurable for PayTo PaymentIntent with `setup_future_usage=none`. Other fields are only applicable to PayTo PaymentIntent with `setup_future_usage=off_session`
           */
          mandate_options?: Payto.MandateOptions;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Stripe.Emptyable<Payto.SetupFutureUsage>;
        }

        namespace Payto {
          interface MandateOptions {
            /**
             * Amount that will be collected. It is required when `amount_type` is `fixed`.
             */
            amount?: number;

            /**
             * The type of amount that will be collected. The amount charged must be exact or up to the value of `amount` param for `fixed` or `maximum` type respectively.
             */
            amount_type?: MandateOptions.AmountType;

            /**
             * Date, in YYYY-MM-DD format, after which payments will not be collected. Defaults to no end date.
             */
            end_date?: string;

            /**
             * The periodicity at which payments will be collected.
             */
            payment_schedule?: MandateOptions.PaymentSchedule;

            /**
             * The number of payments that will be made during a payment period. Defaults to 1 except for when `payment_schedule` is `adhoc`. In that case, it defaults to no limit.
             */
            payments_per_period?: number;

            /**
             * The purpose for which payments are made. Defaults to retail.
             */
            purpose?: MandateOptions.Purpose;
          }

          namespace MandateOptions {
            type AmountType = 'fixed' | 'maximum';

            type PaymentSchedule =
              | 'adhoc'
              | 'annual'
              | 'daily'
              | 'fortnightly'
              | 'monthly'
              | 'quarterly'
              | 'semi_annual'
              | 'weekly';

            type Purpose =
              | 'dependant_support'
              | 'government'
              | 'loan'
              | 'mortgage'
              | 'other'
              | 'pension'
              | 'personal'
              | 'retail'
              | 'salary'
              | 'tax'
              | 'utility';
          }

          type SetupFutureUsage = 'none' | 'off_session';
        }

        interface Pix {
          /**
           * The number of seconds (between 10 and 1209600) after which Pix payment will expire. Defaults to 86400 seconds.
           */
          expires_after_seconds?: number;

          /**
           * The timestamp at which the Pix expires (between 10 and 1209600 seconds in the future). Defaults to 1 day in the future.
           */
          expires_at?: number;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        interface Promptpay {
          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        interface RevolutPay {
          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           */
          setup_future_usage?: Stripe.Emptyable<RevolutPay.SetupFutureUsage>;
        }

        namespace RevolutPay {
          type SetupFutureUsage = 'none' | 'off_session';
        }

        interface SepaDebit {
          /**
           * Additional fields for Mandate creation
           */
          mandate_options?: SepaDebit.MandateOptions;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Stripe.Emptyable<SepaDebit.SetupFutureUsage>;
        }

        namespace SepaDebit {
          interface MandateOptions {}

          type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
        }

        interface Sofort {
          /**
           * Language shown to the payer on redirect.
           */
          preferred_language?: Stripe.Emptyable<Sofort.PreferredLanguage>;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Stripe.Emptyable<Sofort.SetupFutureUsage>;
        }

        namespace Sofort {
          type PreferredLanguage =
            | 'de'
            | 'en'
            | 'es'
            | 'fr'
            | 'it'
            | 'nl'
            | 'pl';

          type SetupFutureUsage = 'none' | 'off_session';
        }

        interface Swish {
          /**
           * The order ID displayed in the Swish app after the payment is authorized.
           */
          reference?: Stripe.Emptyable<string>;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        interface UsBankAccount {
          /**
           * Additional fields for Financial Connections Session creation
           */
          financial_connections?: UsBankAccount.FinancialConnections;

          /**
           * Additional fields for Mandate creation
           */
          mandate_options?: UsBankAccount.MandateOptions;

          /**
           * Additional fields for network related functions
           */
          networks?: UsBankAccount.Networks;

          /**
           * Preferred transaction settlement speed
           */
          preferred_settlement_speed?: Stripe.Emptyable<
            UsBankAccount.PreferredSettlementSpeed
          >;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Stripe.Emptyable<UsBankAccount.SetupFutureUsage>;

          /**
           * Bank account verification method.
           */
          verification_method?: UsBankAccount.VerificationMethod;
        }

        namespace UsBankAccount {
          interface FinancialConnections {
            /**
             * Customize manual entry behavior
             */
            manual_entry?: FinancialConnections.ManualEntry;

            /**
             * The list of permissions to request. If this parameter is passed, the `payment_method` permission must be included. Valid permissions include: `balances`, `ownership`, `payment_method`, and `transactions`.
             */
            permissions?: Array<FinancialConnections.Permission>;

            /**
             * List of data features that you would like to retrieve upon account creation.
             */
            prefetch?: Array<FinancialConnections.Prefetch>;

            /**
             * For webview integrations only. Upon completing OAuth login in the native browser, the user will be redirected to this URL to return to your app.
             */
            return_url?: string;
          }

          namespace FinancialConnections {
            interface ManualEntry {
              /**
               * Settings for configuring manual entry of account details.
               */
              mode: ManualEntry.Mode;
            }

            namespace ManualEntry {
              type Mode = 'automatic' | 'custom';
            }

            type Permission =
              | 'balances'
              | 'ownership'
              | 'payment_method'
              | 'transactions';

            type Prefetch =
              | 'balances'
              | 'inferred_balances'
              | 'ownership'
              | 'transactions';
          }

          interface MandateOptions {
            /**
             * The method used to collect offline mandate customer acceptance.
             */
            collection_method?: Stripe.Emptyable<'paper'>;
          }

          interface Networks {
            /**
             * Triggers validations to run across the selected networks
             */
            requested?: Array<Networks.Requested>;
          }

          namespace Networks {
            type Requested = 'ach' | 'us_domestic_wire';
          }

          type PreferredSettlementSpeed = 'fastest' | 'standard';

          type SetupFutureUsage = 'none' | 'off_session' | 'on_session';

          type VerificationMethod = 'automatic' | 'instant' | 'microdeposits';
        }

        interface WechatPay {
          /**
           * The app ID registered with WeChat Pay. Only required when client is ios or android.
           */
          app_id?: string;

          /**
           * The client type that the end customer will pay from
           */
          client: WechatPay.Client;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        namespace WechatPay {
          type Client = 'android' | 'ios' | 'web';
        }

        interface Zip {
          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }
      }

      interface RadarOptions {
        /**
         * A [Radar Session](https://stripe.com/docs/radar/radar-session) is a snapshot of the browser metadata and device details that help Radar make more accurate predictions on your payments.
         */
        session?: string;
      }

      type SecretKeyConfirmation = 'optional' | 'required';

      type SetupFutureUsage = 'off_session' | 'on_session';

      interface Shipping {
        /**
         * Shipping address.
         */
        address: Stripe.AddressParam;

        /**
         * The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc.
         */
        carrier?: string;

        /**
         * Recipient name.
         */
        name: string;

        /**
         * Recipient phone (including extension).
         */
        phone?: string;

        /**
         * The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, please separate them with commas.
         */
        tracking_number?: string;
      }

      interface TransferData {
        /**
         * The amount that will be transferred automatically when a charge succeeds.
         * The amount is capped at the total transaction amount and if no amount is set,
         * the full amount is transferred.
         *
         * If you intend to collect a fee and you need a more robust reporting experience, using
         * [application_fee_amount](https://stripe.com/docs/api/payment_intents/create#create_payment_intent-application_fee_amount)
         * might be a better fit for your integration.
         */
        amount?: number;

        /**
         * If specified, successful charges will be attributed to the destination
         * account for tax reporting, and the funds from charges will be transferred
         * to the destination account. The ID of the resulting transfer will be
         * returned on the successful charge's `transfer` field.
         */
        destination: string;
      }
    }

    interface PaymentIntentRetrieveParams {
      /**
       * The client secret of the PaymentIntent. We require it if you use a publishable key to retrieve the source.
       */
      client_secret?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface PaymentIntentUpdateParams {
      /**
       * Amount intended to be collected by this PaymentIntent. A positive integer representing how much to charge in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). The minimum amount is $0.50 US or [equivalent in charge currency](https://stripe.com/docs/currencies#minimum-and-maximum-charge-amounts). The amount value supports up to eight digits (e.g., a value of 99999999 for a USD charge of $999,999.99).
       */
      amount?: number;

      /**
       * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. The amount of the application fee collected will be capped at the total payment amount. For more information, see the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
       */
      application_fee_amount?: Stripe.Emptyable<number>;

      /**
       * Controls when the funds will be captured from the customer's account.
       */
      capture_method?: PaymentIntentUpdateParams.CaptureMethod;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency?: string;

      /**
       * ID of the Customer this PaymentIntent belongs to, if one exists.
       *
       * Payment methods attached to other Customers cannot be used with this PaymentIntent.
       *
       * If present in combination with [setup_future_usage](https://stripe.com/docs/api#payment_intent_object-setup_future_usage), this PaymentIntent's payment method will be attached to the Customer after the PaymentIntent has been confirmed and any required actions from the user are complete.
       */
      customer?: string;

      /**
       * An arbitrary string attached to the object. Often useful for displaying to users.
       */
      description?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * This hash contains details about the Mandate to create.
       */
      mandate_data?: PaymentIntentUpdateParams.MandateData;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

      /**
       * Provides industry-specific information about the charge.
       */
      payment_details?: Stripe.Emptyable<
        PaymentIntentUpdateParams.PaymentDetails
      >;

      /**
       * ID of the payment method (a PaymentMethod, Card, or [compatible Source](https://stripe.com/docs/payments/payment-methods/transitioning#compatibility) object) to attach to this PaymentIntent.
       */
      payment_method?: string;

      /**
       * The ID of the payment method configuration to use with this PaymentIntent.
       */
      payment_method_configuration?: string;

      /**
       * If provided, this hash will be used to create a PaymentMethod. The new PaymentMethod will appear
       * in the [payment_method](https://stripe.com/docs/api/payment_intents/object#payment_intent_object-payment_method)
       * property on the PaymentIntent.
       */
      payment_method_data?: PaymentIntentUpdateParams.PaymentMethodData;

      /**
       * Payment-method-specific configuration for this PaymentIntent.
       */
      payment_method_options?: PaymentIntentUpdateParams.PaymentMethodOptions;

      /**
       * The list of payment method types (for example, card) that this PaymentIntent can use. Use `automatic_payment_methods` to manage payment methods from the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods).
       */
      payment_method_types?: Array<string>;

      /**
       * Email address that the receipt for the resulting payment will be sent to. If `receipt_email` is specified for a payment in live mode, a receipt will be sent regardless of your [email settings](https://dashboard.stripe.com/account/emails).
       */
      receipt_email?: Stripe.Emptyable<string>;

      /**
       * Indicates that you intend to make future payments with this PaymentIntent's payment method.
       *
       * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
       *
       * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
       *
       * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
       */
      setup_future_usage?: Stripe.Emptyable<
        PaymentIntentUpdateParams.SetupFutureUsage
      >;

      /**
       * Shipping information for this PaymentIntent.
       */
      shipping?: Stripe.Emptyable<PaymentIntentUpdateParams.Shipping>;

      /**
       * For card charges, use [statement_descriptor_suffix](https://stripe.com/docs/payments/account/statement-descriptors#dynamic). Otherwise, you can use this value as the complete description of a charge on your customers' statements. It must contain at least one letter and be 1–22 characters long.
       */
      statement_descriptor?: string;

      /**
       * Provides information about a card payment that customers see on their statements. Concatenated with the prefix (shortened descriptor) or statement descriptor that's set on the account to form the complete statement descriptor. Maximum 22 characters for the concatenated descriptor.
       */
      statement_descriptor_suffix?: string;

      /**
       * Use this parameter to automatically create a Transfer when the payment succeeds. Learn more about the [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
       */
      transfer_data?: PaymentIntentUpdateParams.TransferData;

      /**
       * A string that identifies the resulting payment as part of a group. You can only provide `transfer_group` if it hasn't been set. Learn more about the [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
       */
      transfer_group?: string;
    }

    namespace PaymentIntentUpdateParams {
      type CaptureMethod = 'automatic' | 'automatic_async' | 'manual';

      interface MandateData {
        /**
         * This hash contains details about the customer acceptance of the Mandate.
         */
        customer_acceptance: MandateData.CustomerAcceptance;
      }

      namespace MandateData {
        interface CustomerAcceptance {
          /**
           * If this is a Mandate accepted online, this hash contains details about the online acceptance.
           */
          online: CustomerAcceptance.Online;

          /**
           * The type of customer acceptance information included with the Mandate.
           */
          type: 'online';
        }

        namespace CustomerAcceptance {
          interface Online {
            /**
             * The IP address from which the Mandate was accepted by the customer.
             */
            ip_address?: string;

            /**
             * The user agent of the browser from which the Mandate was accepted by the customer.
             */
            user_agent?: string;
          }
        }
      }

      interface PaymentDetails {
        /**
         * Car rental details for this PaymentIntent.
         */
        car_rental?: PaymentDetails.CarRental;

        /**
         * Event details for this PaymentIntent
         */
        event_details?: PaymentDetails.EventDetails;

        /**
         * Flight reservation details for this PaymentIntent
         */
        flight?: PaymentDetails.Flight;

        /**
         * Lodging reservation details for this PaymentIntent
         */
        lodging?: PaymentDetails.Lodging;

        /**
         * Subscription details for this PaymentIntent
         */
        subscription?: PaymentDetails.Subscription;
      }

      namespace PaymentDetails {
        interface CarRental {
          /**
           * Affiliate details for this purchase.
           */
          affiliate?: CarRental.Affiliate;

          /**
           * The booking number associated with the car rental.
           */
          booking_number: string;

          /**
           * Class code of the car.
           */
          car_class_code?: string;

          /**
           * Make of the car.
           */
          car_make?: string;

          /**
           * Model of the car.
           */
          car_model?: string;

          /**
           * The name of the rental car company.
           */
          company?: string;

          /**
           * The customer service phone number of the car rental company.
           */
          customer_service_phone_number?: string;

          /**
           * Number of days the car is being rented.
           */
          days_rented: number;

          /**
           * Delivery details for this purchase.
           */
          delivery?: CarRental.Delivery;

          /**
           * The details of the passengers in the travel reservation
           */
          drivers?: Array<CarRental.Driver>;

          /**
           * List of additional charges being billed.
           */
          extra_charges?: Array<CarRental.ExtraCharge>;

          /**
           * Indicates if the customer did not keep nor cancel their booking.
           */
          no_show?: boolean;

          /**
           * Car pick-up address.
           */
          pickup_address?: Stripe.AddressParam;

          /**
           * Car pick-up time. Measured in seconds since the Unix epoch.
           */
          pickup_at: number;

          /**
           * Rental rate.
           */
          rate_amount?: number;

          /**
           * The frequency at which the rate amount is applied. One of `day`, `week` or `month`
           */
          rate_interval?: CarRental.RateInterval;

          /**
           * The name of the person or entity renting the car.
           */
          renter_name?: string;

          /**
           * Car return address.
           */
          return_address?: Stripe.AddressParam;

          /**
           * Car return time. Measured in seconds since the Unix epoch.
           */
          return_at: number;

          /**
           * Indicates whether the goods or services are tax-exempt or tax is not collected.
           */
          tax_exempt?: boolean;
        }

        namespace CarRental {
          interface Affiliate {
            /**
             * The name of the affiliate that originated the purchase.
             */
            name: string;
          }

          interface Delivery {
            /**
             * The delivery method for the payment
             */
            mode?: Delivery.Mode;

            /**
             * Details of the recipient.
             */
            recipient?: Delivery.Recipient;
          }

          namespace Delivery {
            type Mode = 'email' | 'phone' | 'pickup' | 'post';

            interface Recipient {
              /**
               * The email of the recipient the ticket is delivered to.
               */
              email?: string;

              /**
               * The name of the recipient the ticket is delivered to.
               */
              name?: string;

              /**
               * The phone number of the recipient the ticket is delivered to.
               */
              phone?: string;
            }
          }

          interface Driver {
            /**
             * Full name of the person or entity on the car reservation.
             */
            name: string;
          }

          type ExtraCharge =
            | 'extra_mileage'
            | 'gas'
            | 'late_return'
            | 'one_way_service'
            | 'parking_violation';

          type RateInterval = 'day' | 'month' | 'week';
        }

        interface EventDetails {
          /**
           * Indicates if the tickets are digitally checked when entering the venue.
           */
          access_controlled_venue?: boolean;

          /**
           * The event location's address.
           */
          address?: Stripe.AddressParam;

          /**
           * Affiliate details for this purchase.
           */
          affiliate?: EventDetails.Affiliate;

          /**
           * The name of the company
           */
          company?: string;

          /**
           * Delivery details for this purchase.
           */
          delivery?: EventDetails.Delivery;

          /**
           * Event end time. Measured in seconds since the Unix epoch.
           */
          ends_at?: number;

          /**
           * Type of the event entertainment (concert, sports event etc)
           */
          genre?: string;

          /**
           * The name of the event.
           */
          name: string;

          /**
           * Event start time. Measured in seconds since the Unix epoch.
           */
          starts_at?: number;
        }

        namespace EventDetails {
          interface Affiliate {
            /**
             * The name of the affiliate that originated the purchase.
             */
            name: string;
          }

          interface Delivery {
            /**
             * The delivery method for the payment
             */
            mode?: Delivery.Mode;

            /**
             * Details of the recipient.
             */
            recipient?: Delivery.Recipient;
          }

          namespace Delivery {
            type Mode = 'email' | 'phone' | 'pickup' | 'post';

            interface Recipient {
              /**
               * The email of the recipient the ticket is delivered to.
               */
              email?: string;

              /**
               * The name of the recipient the ticket is delivered to.
               */
              name?: string;

              /**
               * The phone number of the recipient the ticket is delivered to.
               */
              phone?: string;
            }
          }
        }

        interface Flight {
          /**
           * Affiliate details for this purchase.
           */
          affiliate?: Flight.Affiliate;

          /**
           * The agency number (i.e. International Air Transport Association (IATA) agency number) of the travel agency that made the booking.
           */
          agency_number?: string;

          /**
           * The International Air Transport Association (IATA) carrier code of the carrier that issued the ticket.
           */
          carrier?: string;

          /**
           * Delivery details for this purchase.
           */
          delivery?: Flight.Delivery;

          /**
           * The name of the person or entity on the reservation.
           */
          passenger_name?: string;

          /**
           * The details of the passengers in the travel reservation.
           */
          passengers?: Array<Flight.Passenger>;

          /**
           * The individual flight segments associated with the trip.
           */
          segments: Array<Flight.Segment>;

          /**
           * The ticket number associated with the travel reservation.
           */
          ticket_number?: string;
        }

        namespace Flight {
          interface Affiliate {
            /**
             * The name of the affiliate that originated the purchase.
             */
            name: string;
          }

          interface Delivery {
            /**
             * The delivery method for the payment
             */
            mode?: Delivery.Mode;

            /**
             * Details of the recipient.
             */
            recipient?: Delivery.Recipient;
          }

          namespace Delivery {
            type Mode = 'email' | 'phone' | 'pickup' | 'post';

            interface Recipient {
              /**
               * The email of the recipient the ticket is delivered to.
               */
              email?: string;

              /**
               * The name of the recipient the ticket is delivered to.
               */
              name?: string;

              /**
               * The phone number of the recipient the ticket is delivered to.
               */
              phone?: string;
            }
          }

          interface Passenger {
            /**
             * Full name of the person or entity on the flight reservation.
             */
            name: string;
          }

          interface Segment {
            /**
             * The flight segment amount.
             */
            amount?: number;

            /**
             * The International Air Transport Association (IATA) airport code for the arrival airport.
             */
            arrival_airport?: string;

            /**
             * The arrival time for the flight segment. Measured in seconds since the Unix epoch.
             */
            arrives_at?: number;

            /**
             * The International Air Transport Association (IATA) carrier code of the carrier operating the flight segment.
             */
            carrier?: string;

            /**
             * The departure time for the flight segment. Measured in seconds since the Unix epoch.
             */
            departs_at: number;

            /**
             * The International Air Transport Association (IATA) airport code for the departure airport.
             */
            departure_airport?: string;

            /**
             * The flight number associated with the segment
             */
            flight_number?: string;

            /**
             * The fare class for the segment.
             */
            service_class?: Segment.ServiceClass;
          }

          namespace Segment {
            type ServiceClass =
              | 'business'
              | 'economy'
              | 'first'
              | 'premium_economy';
          }
        }

        interface Lodging {
          /**
           * The lodging location's address.
           */
          address?: Stripe.AddressParam;

          /**
           * The number of adults on the booking
           */
          adults?: number;

          /**
           * Affiliate details for this purchase.
           */
          affiliate?: Lodging.Affiliate;

          /**
           * The booking number associated with the lodging reservation.
           */
          booking_number?: string;

          /**
           * The lodging category
           */
          category?: Lodging.Category;

          /**
           * Loding check-in time. Measured in seconds since the Unix epoch.
           */
          checkin_at: number;

          /**
           * Lodging check-out time. Measured in seconds since the Unix epoch.
           */
          checkout_at: number;

          /**
           * The customer service phone number of the lodging company.
           */
          customer_service_phone_number?: string;

          /**
           * The daily lodging room rate.
           */
          daily_room_rate_amount?: number;

          /**
           * Delivery details for this purchase.
           */
          delivery?: Lodging.Delivery;

          /**
           * List of additional charges being billed.
           */
          extra_charges?: Array<Lodging.ExtraCharge>;

          /**
           * Indicates whether the lodging location is compliant with the Fire Safety Act.
           */
          fire_safety_act_compliance?: boolean;

          /**
           * The name of the lodging location.
           */
          name?: string;

          /**
           * Indicates if the customer did not keep their booking while failing to cancel the reservation.
           */
          no_show?: boolean;

          /**
           * The number of rooms on the booking
           */
          number_of_rooms?: number;

          /**
           * The details of the passengers in the travel reservation
           */
          passengers?: Array<Lodging.Passenger>;

          /**
           * The phone number of the lodging location.
           */
          property_phone_number?: string;

          /**
           * The room class for this purchase.
           */
          room_class?: string;

          /**
           * The number of room nights
           */
          room_nights?: number;

          /**
           * The total tax amount associating with the room reservation.
           */
          total_room_tax_amount?: number;

          /**
           * The total tax amount
           */
          total_tax_amount?: number;
        }

        namespace Lodging {
          interface Affiliate {
            /**
             * The name of the affiliate that originated the purchase.
             */
            name: string;
          }

          type Category = 'hotel' | 'vacation_rental';

          interface Delivery {
            /**
             * The delivery method for the payment
             */
            mode?: Delivery.Mode;

            /**
             * Details of the recipient.
             */
            recipient?: Delivery.Recipient;
          }

          namespace Delivery {
            type Mode = 'email' | 'phone' | 'pickup' | 'post';

            interface Recipient {
              /**
               * The email of the recipient the ticket is delivered to.
               */
              email?: string;

              /**
               * The name of the recipient the ticket is delivered to.
               */
              name?: string;

              /**
               * The phone number of the recipient the ticket is delivered to.
               */
              phone?: string;
            }
          }

          type ExtraCharge =
            | 'gift_shop'
            | 'laundry'
            | 'mini_bar'
            | 'other'
            | 'restaurant'
            | 'telephone';

          interface Passenger {
            /**
             * Full name of the person or entity on the lodging reservation.
             */
            name: string;
          }
        }

        interface Subscription {
          /**
           * Affiliate details for this purchase.
           */
          affiliate?: Subscription.Affiliate;

          /**
           * Info whether the subscription will be auto renewed upon expiry.
           */
          auto_renewal?: boolean;

          /**
           * Subscription billing details for this purchase.
           */
          billing_interval?: Subscription.BillingInterval;

          /**
           * Subscription end time. Measured in seconds since the Unix epoch.
           */
          ends_at?: number;

          /**
           * Name of the product on subscription. e.g. Apple Music Subscription
           */
          name: string;

          /**
           * Subscription start time. Measured in seconds since the Unix epoch.
           */
          starts_at?: number;
        }

        namespace Subscription {
          interface Affiliate {
            /**
             * The name of the affiliate that originated the purchase.
             */
            name: string;
          }

          interface BillingInterval {
            /**
             * The number of intervals, as an whole number greater than 0. Stripe multiplies this by the interval type to get the overall duration.
             */
            count: number;

            /**
             * Specifies a type of interval unit. Either `day`, `week`, `month` or `year`.
             */
            interval: BillingInterval.Interval;
          }

          namespace BillingInterval {
            type Interval = 'day' | 'month' | 'week' | 'year';
          }
        }
      }

      interface PaymentMethodData {
        /**
         * If this is an `acss_debit` PaymentMethod, this hash contains details about the ACSS Debit payment method.
         */
        acss_debit?: PaymentMethodData.AcssDebit;

        /**
         * If this is an `affirm` PaymentMethod, this hash contains details about the Affirm payment method.
         */
        affirm?: PaymentMethodData.Affirm;

        /**
         * If this is an `AfterpayClearpay` PaymentMethod, this hash contains details about the AfterpayClearpay payment method.
         */
        afterpay_clearpay?: PaymentMethodData.AfterpayClearpay;

        /**
         * If this is an `Alipay` PaymentMethod, this hash contains details about the Alipay payment method.
         */
        alipay?: PaymentMethodData.Alipay;

        /**
         * If this is an `au_becs_debit` PaymentMethod, this hash contains details about the bank account.
         */
        au_becs_debit?: PaymentMethodData.AuBecsDebit;

        /**
         * If this is a `bacs_debit` PaymentMethod, this hash contains details about the Bacs Direct Debit bank account.
         */
        bacs_debit?: PaymentMethodData.BacsDebit;

        /**
         * If this is a `bancontact` PaymentMethod, this hash contains details about the Bancontact payment method.
         */
        bancontact?: PaymentMethodData.Bancontact;

        /**
         * Billing information associated with the PaymentMethod that may be used or required by particular types of payment methods.
         */
        billing_details?: PaymentMethodData.BillingDetails;

        /**
         * If this is a `blik` PaymentMethod, this hash contains details about the BLIK payment method.
         */
        blik?: PaymentMethodData.Blik;

        /**
         * If this is a `boleto` PaymentMethod, this hash contains details about the Boleto payment method.
         */
        boleto?: PaymentMethodData.Boleto;

        /**
         * If this is a `cashapp` PaymentMethod, this hash contains details about the Cash App Pay payment method.
         */
        cashapp?: PaymentMethodData.Cashapp;

        /**
         * If this is a `customer_balance` PaymentMethod, this hash contains details about the CustomerBalance payment method.
         */
        customer_balance?: PaymentMethodData.CustomerBalance;

        /**
         * If this is an `eps` PaymentMethod, this hash contains details about the EPS payment method.
         */
        eps?: PaymentMethodData.Eps;

        /**
         * If this is an `fpx` PaymentMethod, this hash contains details about the FPX payment method.
         */
        fpx?: PaymentMethodData.Fpx;

        /**
         * If this is a `giropay` PaymentMethod, this hash contains details about the Giropay payment method.
         */
        giropay?: PaymentMethodData.Giropay;

        /**
         * If this is a `grabpay` PaymentMethod, this hash contains details about the GrabPay payment method.
         */
        grabpay?: PaymentMethodData.Grabpay;

        /**
         * If this is an `ideal` PaymentMethod, this hash contains details about the iDEAL payment method.
         */
        ideal?: PaymentMethodData.Ideal;

        /**
         * If this is an `interac_present` PaymentMethod, this hash contains details about the Interac Present payment method.
         */
        interac_present?: PaymentMethodData.InteracPresent;

        /**
         * If this is a `klarna` PaymentMethod, this hash contains details about the Klarna payment method.
         */
        klarna?: PaymentMethodData.Klarna;

        /**
         * If this is a `konbini` PaymentMethod, this hash contains details about the Konbini payment method.
         */
        konbini?: PaymentMethodData.Konbini;

        /**
         * If this is an `Link` PaymentMethod, this hash contains details about the Link payment method.
         */
        link?: PaymentMethodData.Link;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.MetadataParam;

        /**
         * If this is a `mobilepay` PaymentMethod, this hash contains details about the MobilePay payment method.
         */
        mobilepay?: PaymentMethodData.Mobilepay;

        /**
         * If this is a `multibanco` PaymentMethod, this hash contains details about the Multibanco payment method.
         */
        multibanco?: PaymentMethodData.Multibanco;

        /**
         * If this is an `oxxo` PaymentMethod, this hash contains details about the OXXO payment method.
         */
        oxxo?: PaymentMethodData.Oxxo;

        /**
         * If this is a `p24` PaymentMethod, this hash contains details about the P24 payment method.
         */
        p24?: PaymentMethodData.P24;

        /**
         * If this is a `paynow` PaymentMethod, this hash contains details about the PayNow payment method.
         */
        paynow?: PaymentMethodData.Paynow;

        /**
         * If this is a `paypal` PaymentMethod, this hash contains details about the PayPal payment method.
         */
        paypal?: PaymentMethodData.Paypal;

        /**
         * If this is a `payto` PaymentMethod, this hash contains details about the PayTo payment method.
         */
        payto?: PaymentMethodData.Payto;

        /**
         * If this is a `pix` PaymentMethod, this hash contains details about the Pix payment method.
         */
        pix?: PaymentMethodData.Pix;

        /**
         * If this is a `promptpay` PaymentMethod, this hash contains details about the PromptPay payment method.
         */
        promptpay?: PaymentMethodData.Promptpay;

        /**
         * Options to configure Radar. See [Radar Session](https://stripe.com/docs/radar/radar-session) for more information.
         */
        radar_options?: PaymentMethodData.RadarOptions;

        /**
         * If this is a `Revolut Pay` PaymentMethod, this hash contains details about the Revolut Pay payment method.
         */
        revolut_pay?: PaymentMethodData.RevolutPay;

        /**
         * If this is a `sepa_debit` PaymentMethod, this hash contains details about the SEPA debit bank account.
         */
        sepa_debit?: PaymentMethodData.SepaDebit;

        /**
         * If this is a `sofort` PaymentMethod, this hash contains details about the SOFORT payment method.
         */
        sofort?: PaymentMethodData.Sofort;

        /**
         * If this is a `swish` PaymentMethod, this hash contains details about the Swish payment method.
         */
        swish?: PaymentMethodData.Swish;

        /**
         * If this is a Twint PaymentMethod, this hash contains details about the Twint payment method.
         */
        twint?: PaymentMethodData.Twint;

        /**
         * The type of the PaymentMethod. An additional hash is included on the PaymentMethod with a name matching this value. It contains additional information specific to the PaymentMethod type.
         */
        type: PaymentMethodData.Type;

        /**
         * If this is an `us_bank_account` PaymentMethod, this hash contains details about the US bank account payment method.
         */
        us_bank_account?: PaymentMethodData.UsBankAccount;

        /**
         * If this is an `wechat_pay` PaymentMethod, this hash contains details about the wechat_pay payment method.
         */
        wechat_pay?: PaymentMethodData.WechatPay;

        /**
         * If this is a `zip` PaymentMethod, this hash contains details about the Zip payment method.
         */
        zip?: PaymentMethodData.Zip;
      }

      namespace PaymentMethodData {
        interface AcssDebit {
          /**
           * Customer's bank account number.
           */
          account_number: string;

          /**
           * Institution number of the customer's bank.
           */
          institution_number: string;

          /**
           * Transit number of the customer's bank.
           */
          transit_number: string;
        }

        interface Affirm {}

        interface AfterpayClearpay {}

        interface Alipay {}

        interface AuBecsDebit {
          /**
           * The account number for the bank account.
           */
          account_number: string;

          /**
           * Bank-State-Branch number of the bank account.
           */
          bsb_number: string;
        }

        interface BacsDebit {
          /**
           * Account number of the bank account that the funds will be debited from.
           */
          account_number?: string;

          /**
           * Sort code of the bank account. (e.g., `10-20-30`)
           */
          sort_code?: string;
        }

        interface Bancontact {}

        interface BillingDetails {
          /**
           * Billing address.
           */
          address?: Stripe.Emptyable<Stripe.AddressParam>;

          /**
           * Email address.
           */
          email?: Stripe.Emptyable<string>;

          /**
           * Full name.
           */
          name?: Stripe.Emptyable<string>;

          /**
           * Billing phone number (including extension).
           */
          phone?: Stripe.Emptyable<string>;
        }

        interface Blik {}

        interface Boleto {
          /**
           * The tax ID of the customer (CPF for individual consumers or CNPJ for businesses consumers)
           */
          tax_id: string;
        }

        interface Cashapp {}

        interface CustomerBalance {}

        interface Eps {
          /**
           * The customer's bank.
           */
          bank?: Eps.Bank;
        }

        namespace Eps {
          type Bank =
            | 'arzte_und_apotheker_bank'
            | 'austrian_anadi_bank_ag'
            | 'bank_austria'
            | 'bankhaus_carl_spangler'
            | 'bankhaus_schelhammer_und_schattera_ag'
            | 'bawag_psk_ag'
            | 'bks_bank_ag'
            | 'brull_kallmus_bank_ag'
            | 'btv_vier_lander_bank'
            | 'capital_bank_grawe_gruppe_ag'
            | 'deutsche_bank_ag'
            | 'dolomitenbank'
            | 'easybank_ag'
            | 'erste_bank_und_sparkassen'
            | 'hypo_alpeadriabank_international_ag'
            | 'hypo_bank_burgenland_aktiengesellschaft'
            | 'hypo_noe_lb_fur_niederosterreich_u_wien'
            | 'hypo_oberosterreich_salzburg_steiermark'
            | 'hypo_tirol_bank_ag'
            | 'hypo_vorarlberg_bank_ag'
            | 'marchfelder_bank'
            | 'oberbank_ag'
            | 'raiffeisen_bankengruppe_osterreich'
            | 'schoellerbank_ag'
            | 'sparda_bank_wien'
            | 'volksbank_gruppe'
            | 'volkskreditbank_ag'
            | 'vr_bank_braunau';
        }

        interface Fpx {
          /**
           * Account holder type for FPX transaction
           */
          account_holder_type?: Fpx.AccountHolderType;

          /**
           * The customer's bank.
           */
          bank: Fpx.Bank;
        }

        namespace Fpx {
          type AccountHolderType = 'company' | 'individual';

          type Bank =
            | 'affin_bank'
            | 'agrobank'
            | 'alliance_bank'
            | 'ambank'
            | 'bank_islam'
            | 'bank_muamalat'
            | 'bank_of_china'
            | 'bank_rakyat'
            | 'bsn'
            | 'cimb'
            | 'deutsche_bank'
            | 'hong_leong_bank'
            | 'hsbc'
            | 'kfh'
            | 'maybank2e'
            | 'maybank2u'
            | 'ocbc'
            | 'pb_enterprise'
            | 'public_bank'
            | 'rhb'
            | 'standard_chartered'
            | 'uob';
        }

        interface Giropay {}

        interface Grabpay {}

        interface Ideal {
          /**
           * The customer's bank.
           */
          bank?: Ideal.Bank;
        }

        namespace Ideal {
          type Bank =
            | 'abn_amro'
            | 'asn_bank'
            | 'bunq'
            | 'handelsbanken'
            | 'ing'
            | 'knab'
            | 'moneyou'
            | 'n26'
            | 'nn'
            | 'rabobank'
            | 'regiobank'
            | 'revolut'
            | 'sns_bank'
            | 'triodos_bank'
            | 'van_lanschot'
            | 'yoursafe';
        }

        interface InteracPresent {}

        interface Klarna {
          /**
           * Customer's date of birth
           */
          dob?: Klarna.Dob;
        }

        namespace Klarna {
          interface Dob {
            /**
             * The day of birth, between 1 and 31.
             */
            day: number;

            /**
             * The month of birth, between 1 and 12.
             */
            month: number;

            /**
             * The four-digit year of birth.
             */
            year: number;
          }
        }

        interface Konbini {}

        interface Link {}

        interface Mobilepay {}

        interface Multibanco {}

        interface Oxxo {}

        interface P24 {
          /**
           * The customer's bank.
           */
          bank?: P24.Bank;
        }

        namespace P24 {
          type Bank =
            | 'alior_bank'
            | 'bank_millennium'
            | 'bank_nowy_bfg_sa'
            | 'bank_pekao_sa'
            | 'banki_spbdzielcze'
            | 'blik'
            | 'bnp_paribas'
            | 'boz'
            | 'citi_handlowy'
            | 'credit_agricole'
            | 'envelobank'
            | 'etransfer_pocztowy24'
            | 'getin_bank'
            | 'ideabank'
            | 'ing'
            | 'inteligo'
            | 'mbank_mtransfer'
            | 'nest_przelew'
            | 'noble_pay'
            | 'pbac_z_ipko'
            | 'plus_bank'
            | 'santander_przelew24'
            | 'tmobile_usbugi_bankowe'
            | 'toyota_bank'
            | 'velobank'
            | 'volkswagen_bank';
        }

        interface Paynow {}

        interface Paypal {}

        interface Payto {
          /**
           * The account number for the bank account.
           */
          account_number?: string;

          /**
           * Bank-State-Branch number of the bank account.
           */
          bsb_number?: string;

          /**
           * The PayID alias for the bank account.
           */
          pay_id?: string;
        }

        interface Pix {}

        interface Promptpay {}

        interface RadarOptions {
          /**
           * A [Radar Session](https://stripe.com/docs/radar/radar-session) is a snapshot of the browser metadata and device details that help Radar make more accurate predictions on your payments.
           */
          session?: string;
        }

        interface RevolutPay {}

        interface SepaDebit {
          /**
           * IBAN of the bank account.
           */
          iban: string;
        }

        interface Sofort {
          /**
           * Two-letter ISO code representing the country the bank account is located in.
           */
          country: Sofort.Country;
        }

        namespace Sofort {
          type Country = 'AT' | 'BE' | 'DE' | 'ES' | 'IT' | 'NL';
        }

        interface Swish {}

        interface Twint {}

        type Type =
          | 'acss_debit'
          | 'affirm'
          | 'afterpay_clearpay'
          | 'alipay'
          | 'au_becs_debit'
          | 'bacs_debit'
          | 'bancontact'
          | 'blik'
          | 'boleto'
          | 'cashapp'
          | 'customer_balance'
          | 'eps'
          | 'fpx'
          | 'giropay'
          | 'grabpay'
          | 'ideal'
          | 'klarna'
          | 'konbini'
          | 'link'
          | 'mobilepay'
          | 'multibanco'
          | 'oxxo'
          | 'p24'
          | 'paynow'
          | 'paypal'
          | 'payto'
          | 'pix'
          | 'promptpay'
          | 'revolut_pay'
          | 'sepa_debit'
          | 'sofort'
          | 'swish'
          | 'twint'
          | 'us_bank_account'
          | 'wechat_pay'
          | 'zip';

        interface UsBankAccount {
          /**
           * Account holder type: individual or company.
           */
          account_holder_type?: UsBankAccount.AccountHolderType;

          /**
           * Account number of the bank account.
           */
          account_number?: string;

          /**
           * Account type: checkings or savings. Defaults to checking if omitted.
           */
          account_type?: UsBankAccount.AccountType;

          /**
           * The ID of a Financial Connections Account to use as a payment method.
           */
          financial_connections_account?: string;

          /**
           * Routing number of the bank account.
           */
          routing_number?: string;
        }

        namespace UsBankAccount {
          type AccountHolderType = 'company' | 'individual';

          type AccountType = 'checking' | 'savings';
        }

        interface WechatPay {}

        interface Zip {}
      }

      interface PaymentMethodOptions {
        /**
         * If this is a `acss_debit` PaymentMethod, this sub-hash contains details about the ACSS Debit payment method options.
         */
        acss_debit?: Stripe.Emptyable<PaymentMethodOptions.AcssDebit>;

        /**
         * If this is an `affirm` PaymentMethod, this sub-hash contains details about the Affirm payment method options.
         */
        affirm?: Stripe.Emptyable<PaymentMethodOptions.Affirm>;

        /**
         * If this is a `afterpay_clearpay` PaymentMethod, this sub-hash contains details about the Afterpay Clearpay payment method options.
         */
        afterpay_clearpay?: Stripe.Emptyable<
          PaymentMethodOptions.AfterpayClearpay
        >;

        /**
         * If this is a `alipay` PaymentMethod, this sub-hash contains details about the Alipay payment method options.
         */
        alipay?: Stripe.Emptyable<PaymentMethodOptions.Alipay>;

        /**
         * If this is a `au_becs_debit` PaymentMethod, this sub-hash contains details about the AU BECS Direct Debit payment method options.
         */
        au_becs_debit?: Stripe.Emptyable<PaymentMethodOptions.AuBecsDebit>;

        /**
         * If this is a `bacs_debit` PaymentMethod, this sub-hash contains details about the BACS Debit payment method options.
         */
        bacs_debit?: Stripe.Emptyable<PaymentMethodOptions.BacsDebit>;

        /**
         * If this is a `bancontact` PaymentMethod, this sub-hash contains details about the Bancontact payment method options.
         */
        bancontact?: Stripe.Emptyable<PaymentMethodOptions.Bancontact>;

        /**
         * If this is a `blik` PaymentMethod, this sub-hash contains details about the BLIK payment method options.
         */
        blik?: Stripe.Emptyable<PaymentMethodOptions.Blik>;

        /**
         * If this is a `boleto` PaymentMethod, this sub-hash contains details about the Boleto payment method options.
         */
        boleto?: Stripe.Emptyable<PaymentMethodOptions.Boleto>;

        /**
         * Configuration for any card payments attempted on this PaymentIntent.
         */
        card?: Stripe.Emptyable<PaymentMethodOptions.Card>;

        /**
         * If this is a `card_present` PaymentMethod, this sub-hash contains details about the Card Present payment method options.
         */
        card_present?: Stripe.Emptyable<PaymentMethodOptions.CardPresent>;

        /**
         * If this is a `cashapp` PaymentMethod, this sub-hash contains details about the Cash App Pay payment method options.
         */
        cashapp?: Stripe.Emptyable<PaymentMethodOptions.Cashapp>;

        /**
         * If this is a `customer balance` PaymentMethod, this sub-hash contains details about the customer balance payment method options.
         */
        customer_balance?: Stripe.Emptyable<
          PaymentMethodOptions.CustomerBalance
        >;

        /**
         * If this is a `eps` PaymentMethod, this sub-hash contains details about the EPS payment method options.
         */
        eps?: Stripe.Emptyable<PaymentMethodOptions.Eps>;

        /**
         * If this is a `fpx` PaymentMethod, this sub-hash contains details about the FPX payment method options.
         */
        fpx?: Stripe.Emptyable<PaymentMethodOptions.Fpx>;

        /**
         * If this is a `giropay` PaymentMethod, this sub-hash contains details about the Giropay payment method options.
         */
        giropay?: Stripe.Emptyable<PaymentMethodOptions.Giropay>;

        /**
         * If this is a `grabpay` PaymentMethod, this sub-hash contains details about the Grabpay payment method options.
         */
        grabpay?: Stripe.Emptyable<PaymentMethodOptions.Grabpay>;

        /**
         * If this is a `ideal` PaymentMethod, this sub-hash contains details about the Ideal payment method options.
         */
        ideal?: Stripe.Emptyable<PaymentMethodOptions.Ideal>;

        /**
         * If this is a `interac_present` PaymentMethod, this sub-hash contains details about the Card Present payment method options.
         */
        interac_present?: Stripe.Emptyable<PaymentMethodOptions.InteracPresent>;

        /**
         * If this is a `klarna` PaymentMethod, this sub-hash contains details about the Klarna payment method options.
         */
        klarna?: Stripe.Emptyable<PaymentMethodOptions.Klarna>;

        /**
         * If this is a `konbini` PaymentMethod, this sub-hash contains details about the Konbini payment method options.
         */
        konbini?: Stripe.Emptyable<PaymentMethodOptions.Konbini>;

        /**
         * If this is a `link` PaymentMethod, this sub-hash contains details about the Link payment method options.
         */
        link?: Stripe.Emptyable<PaymentMethodOptions.Link>;

        /**
         * If this is a `MobilePay` PaymentMethod, this sub-hash contains details about the MobilePay payment method options.
         */
        mobilepay?: Stripe.Emptyable<PaymentMethodOptions.Mobilepay>;

        /**
         * If this is a `multibanco` PaymentMethod, this sub-hash contains details about the Multibanco payment method options.
         */
        multibanco?: Stripe.Emptyable<PaymentMethodOptions.Multibanco>;

        /**
         * If this is a `oxxo` PaymentMethod, this sub-hash contains details about the OXXO payment method options.
         */
        oxxo?: Stripe.Emptyable<PaymentMethodOptions.Oxxo>;

        /**
         * If this is a `p24` PaymentMethod, this sub-hash contains details about the Przelewy24 payment method options.
         */
        p24?: Stripe.Emptyable<PaymentMethodOptions.P24>;

        /**
         * If this is a `paynow` PaymentMethod, this sub-hash contains details about the PayNow payment method options.
         */
        paynow?: Stripe.Emptyable<PaymentMethodOptions.Paynow>;

        /**
         * If this is a `paypal` PaymentMethod, this sub-hash contains details about the PayPal payment method options.
         */
        paypal?: Stripe.Emptyable<PaymentMethodOptions.Paypal>;

        /**
         * If this is a `payto` PaymentMethod, this sub-hash contains details about the PayTo payment method options.
         */
        payto?: Stripe.Emptyable<PaymentMethodOptions.Payto>;

        /**
         * If this is a `pix` PaymentMethod, this sub-hash contains details about the Pix payment method options.
         */
        pix?: Stripe.Emptyable<PaymentMethodOptions.Pix>;

        /**
         * If this is a `promptpay` PaymentMethod, this sub-hash contains details about the PromptPay payment method options.
         */
        promptpay?: Stripe.Emptyable<PaymentMethodOptions.Promptpay>;

        /**
         * If this is a `revolut_pay` PaymentMethod, this sub-hash contains details about the Revolut Pay payment method options.
         */
        revolut_pay?: Stripe.Emptyable<PaymentMethodOptions.RevolutPay>;

        /**
         * If this is a `sepa_debit` PaymentIntent, this sub-hash contains details about the SEPA Debit payment method options.
         */
        sepa_debit?: Stripe.Emptyable<PaymentMethodOptions.SepaDebit>;

        /**
         * If this is a `sofort` PaymentMethod, this sub-hash contains details about the SOFORT payment method options.
         */
        sofort?: Stripe.Emptyable<PaymentMethodOptions.Sofort>;

        /**
         * If this is a `Swish` PaymentMethod, this sub-hash contains details about the Swish payment method options.
         */
        swish?: Stripe.Emptyable<PaymentMethodOptions.Swish>;

        /**
         * If this is a `us_bank_account` PaymentMethod, this sub-hash contains details about the US bank account payment method options.
         */
        us_bank_account?: Stripe.Emptyable<PaymentMethodOptions.UsBankAccount>;

        /**
         * If this is a `wechat_pay` PaymentMethod, this sub-hash contains details about the WeChat Pay payment method options.
         */
        wechat_pay?: Stripe.Emptyable<PaymentMethodOptions.WechatPay>;

        /**
         * If this is a `zip` PaymentMethod, this sub-hash contains details about the Zip payment method options.
         */
        zip?: Stripe.Emptyable<PaymentMethodOptions.Zip>;
      }

      namespace PaymentMethodOptions {
        interface AcssDebit {
          /**
           * Additional fields for Mandate creation
           */
          mandate_options?: AcssDebit.MandateOptions;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Stripe.Emptyable<AcssDebit.SetupFutureUsage>;

          /**
           * Bank account verification method.
           */
          verification_method?: AcssDebit.VerificationMethod;
        }

        namespace AcssDebit {
          interface MandateOptions {
            /**
             * A URL for custom mandate text to render during confirmation step.
             * The URL will be rendered with additional GET parameters `payment_intent` and `payment_intent_client_secret` when confirming a Payment Intent,
             * or `setup_intent` and `setup_intent_client_secret` when confirming a Setup Intent.
             */
            custom_mandate_url?: Stripe.Emptyable<string>;

            /**
             * Description of the mandate interval. Only required if 'payment_schedule' parameter is 'interval' or 'combined'.
             */
            interval_description?: string;

            /**
             * Payment schedule for the mandate.
             */
            payment_schedule?: MandateOptions.PaymentSchedule;

            /**
             * Transaction type of the mandate.
             */
            transaction_type?: MandateOptions.TransactionType;
          }

          namespace MandateOptions {
            type PaymentSchedule = 'combined' | 'interval' | 'sporadic';

            type TransactionType = 'business' | 'personal';
          }

          type SetupFutureUsage = 'none' | 'off_session' | 'on_session';

          type VerificationMethod = 'automatic' | 'instant' | 'microdeposits';
        }

        interface Affirm {
          /**
           * Controls when the funds will be captured from the customer's account.
           *
           * If provided, this parameter will override the top level behavior of `capture_method` when finalizing the payment with this payment method type.
           *
           * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter will unset the stored value for this payment method type.
           */
          capture_method?: Stripe.Emptyable<'manual'>;

          /**
           * Preferred language of the Affirm authorization page that the customer is redirected to.
           */
          preferred_locale?: string;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        interface AfterpayClearpay {
          /**
           * Controls when the funds will be captured from the customer's account.
           *
           * If provided, this parameter will override the top level behavior of `capture_method` when finalizing the payment with this payment method type.
           *
           * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter will unset the stored value for this payment method type.
           */
          capture_method?: Stripe.Emptyable<'manual'>;

          /**
           * An internal identifier or reference that this payment corresponds to. You must limit the identifier to 128 characters, and it can only contain letters, numbers, underscores, backslashes, and dashes.
           * This field differs from the statement descriptor and item name.
           */
          reference?: string;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        interface Alipay {
          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Stripe.Emptyable<Alipay.SetupFutureUsage>;
        }

        namespace Alipay {
          type SetupFutureUsage = 'none' | 'off_session';
        }

        interface AuBecsDebit {
          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Stripe.Emptyable<AuBecsDebit.SetupFutureUsage>;
        }

        namespace AuBecsDebit {
          type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
        }

        interface BacsDebit {
          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Stripe.Emptyable<BacsDebit.SetupFutureUsage>;
        }

        namespace BacsDebit {
          type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
        }

        interface Bancontact {
          /**
           * Preferred language of the Bancontact authorization page that the customer is redirected to.
           */
          preferred_language?: Bancontact.PreferredLanguage;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Stripe.Emptyable<Bancontact.SetupFutureUsage>;
        }

        namespace Bancontact {
          type PreferredLanguage = 'de' | 'en' | 'fr' | 'nl';

          type SetupFutureUsage = 'none' | 'off_session';
        }

        interface Blik {
          /**
           * The 6-digit BLIK code that a customer has generated using their banking application. Can only be set on confirmation.
           */
          code?: string;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Stripe.Emptyable<'none'>;
        }

        interface Boleto {
          /**
           * The number of calendar days before a Boleto voucher expires. For example, if you create a Boleto voucher on Monday and you set expires_after_days to 2, the Boleto invoice will expire on Wednesday at 23:59 America/Sao_Paulo time.
           */
          expires_after_days?: number;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Stripe.Emptyable<Boleto.SetupFutureUsage>;
        }

        namespace Boleto {
          type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
        }

        interface Card {
          /**
           * Controls when the funds will be captured from the customer's account.
           *
           * If provided, this parameter will override the top level behavior of `capture_method` when finalizing the payment with this payment method type.
           *
           * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter will unset the stored value for this payment method type.
           */
          capture_method?: Stripe.Emptyable<'manual'>;

          /**
           * A single-use `cvc_update` Token that represents a card CVC value. When provided, the CVC value will be verified during the card payment attempt. This parameter can only be provided during confirmation.
           */
          cvc_token?: string;

          /**
           * Installment configuration for payments attempted on this PaymentIntent (Mexico Only).
           *
           * For more information, see the [installments integration guide](https://stripe.com/docs/payments/installments).
           */
          installments?: Card.Installments;

          /**
           * Configuration options for setting up an eMandate for cards issued in India.
           */
          mandate_options?: Card.MandateOptions;

          /**
           * When specified, this parameter indicates that a transaction will be marked
           * as MOTO (Mail Order Telephone Order) and thus out of scope for SCA. This
           * parameter can only be provided during confirmation.
           */
          moto?: boolean;

          /**
           * Selected network to process this PaymentIntent on. Depends on the available networks of the card attached to the PaymentIntent. Can be only set confirm-time.
           */
          network?: Card.Network;

          /**
           * Request ability to [decrement the authorization](https://stripe.com/docs/payments/decremental-authorization) for this PaymentIntent.
           */
          request_decremental_authorization?: Card.RequestDecrementalAuthorization;

          /**
           * Request ability to [capture beyond the standard authorization validity window](https://stripe.com/docs/payments/extended-authorization) for this PaymentIntent.
           */
          request_extended_authorization?: Card.RequestExtendedAuthorization;

          /**
           * Request ability to [increment the authorization](https://stripe.com/docs/payments/incremental-authorization) for this PaymentIntent.
           */
          request_incremental_authorization?: Card.RequestIncrementalAuthorization;

          /**
           * Request ability to make [multiple captures](https://stripe.com/docs/payments/multicapture) for this PaymentIntent.
           */
          request_multicapture?: Card.RequestMulticapture;

          /**
           * Request ability to [overcapture](https://stripe.com/docs/payments/overcapture) for this PaymentIntent.
           */
          request_overcapture?: Card.RequestOvercapture;

          /**
           * We strongly recommend that you rely on our SCA Engine to automatically prompt your customers for authentication based on risk level and [other requirements](https://stripe.com/docs/strong-customer-authentication). However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option. If not provided, this value defaults to `automatic`. Read our guide on [manually requesting 3D Secure](https://stripe.com/docs/payments/3d-secure/authentication-flow#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine.
           */
          request_three_d_secure?: Card.RequestThreeDSecure;

          /**
           * When enabled, using a card that is attached to a customer will require the CVC to be provided again (i.e. using the cvc_token parameter).
           */
          require_cvc_recollection?: boolean;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Stripe.Emptyable<Card.SetupFutureUsage>;

          /**
           * Provides information about a card payment that customers see on their statements. Concatenated with the Kana prefix (shortened Kana descriptor) or Kana statement descriptor that's set on the account to form the complete statement descriptor. Maximum 22 characters. On card statements, the *concatenation* of both prefix and suffix (including separators) will appear truncated to 22 characters.
           */
          statement_descriptor_suffix_kana?: Stripe.Emptyable<string>;

          /**
           * Provides information about a card payment that customers see on their statements. Concatenated with the Kanji prefix (shortened Kanji descriptor) or Kanji statement descriptor that's set on the account to form the complete statement descriptor. Maximum 17 characters. On card statements, the *concatenation* of both prefix and suffix (including separators) will appear truncated to 17 characters.
           */
          statement_descriptor_suffix_kanji?: Stripe.Emptyable<string>;

          /**
           * Statement details for this payment intent. You can use this to override the merchant details shown on your customers' statements.
           */
          statement_details?: Stripe.Emptyable<Card.StatementDetails>;

          /**
           * If 3D Secure authentication was performed with a third-party provider,
           * the authentication details to use for this payment.
           */
          three_d_secure?: Card.ThreeDSecure;
        }

        namespace Card {
          interface Installments {
            /**
             * Setting to true enables installments for this PaymentIntent.
             * This will cause the response to contain a list of available installment plans.
             * Setting to false will prevent any selected plan from applying to a charge.
             */
            enabled?: boolean;

            /**
             * The selected installment plan to use for this payment attempt.
             * This parameter can only be provided during confirmation.
             */
            plan?: Stripe.Emptyable<Installments.Plan>;
          }

          namespace Installments {
            interface Plan {
              /**
               * For `fixed_count` installment plans, this is the number of installment payments your customer will make to their credit card.
               */
              count: number;

              /**
               * For `fixed_count` installment plans, this is the interval between installment payments your customer will make to their credit card.
               * One of `month`.
               */
              interval: 'month';

              /**
               * Type of installment plan, one of `fixed_count`.
               */
              type: 'fixed_count';
            }
          }

          interface MandateOptions {
            /**
             * Amount to be charged for future payments.
             */
            amount: number;

            /**
             * One of `fixed` or `maximum`. If `fixed`, the `amount` param refers to the exact amount to be charged in future payments. If `maximum`, the amount charged can be up to the value passed for the `amount` param.
             */
            amount_type: MandateOptions.AmountType;

            /**
             * A description of the mandate or subscription that is meant to be displayed to the customer.
             */
            description?: string;

            /**
             * End date of the mandate or subscription. If not provided, the mandate will be active until canceled. If provided, end date should be after start date.
             */
            end_date?: number;

            /**
             * Specifies payment frequency. One of `day`, `week`, `month`, `year`, or `sporadic`.
             */
            interval: MandateOptions.Interval;

            /**
             * The number of intervals between payments. For example, `interval=month` and `interval_count=3` indicates one payment every three months. Maximum of one year interval allowed (1 year, 12 months, or 52 weeks). This parameter is optional when `interval=sporadic`.
             */
            interval_count?: number;

            /**
             * Unique identifier for the mandate or subscription.
             */
            reference: string;

            /**
             * Start date of the mandate or subscription. Start date should not be lesser than yesterday.
             */
            start_date: number;

            /**
             * Specifies the type of mandates supported. Possible values are `india`.
             */
            supported_types?: Array<'india'>;
          }

          namespace MandateOptions {
            type AmountType = 'fixed' | 'maximum';

            type Interval = 'day' | 'month' | 'sporadic' | 'week' | 'year';
          }

          type Network =
            | 'amex'
            | 'cartes_bancaires'
            | 'diners'
            | 'discover'
            | 'eftpos_au'
            | 'interac'
            | 'jcb'
            | 'mastercard'
            | 'unionpay'
            | 'unknown'
            | 'visa';

          type RequestDecrementalAuthorization = 'if_available' | 'never';

          type RequestExtendedAuthorization = 'if_available' | 'never';

          type RequestIncrementalAuthorization = 'if_available' | 'never';

          type RequestMulticapture = 'if_available' | 'never';

          type RequestOvercapture = 'if_available' | 'never';

          type RequestThreeDSecure = 'any' | 'automatic' | 'challenge';

          type SetupFutureUsage = 'none' | 'off_session' | 'on_session';

          interface StatementDetails {
            /**
             * Please pass in an address that is within your Stripe user account country
             */
            address?: Stripe.AddressParam;

            /**
             * Phone number (e.g., a toll-free number that customers can call)
             */
            phone?: string;
          }

          interface ThreeDSecure {
            /**
             * The `transStatus` returned from the card Issuer's ACS in the ARes.
             */
            ares_trans_status?: ThreeDSecure.AresTransStatus;

            /**
             * The cryptogram, also known as the "authentication value" (AAV, CAVV or
             * AEVV). This value is 20 bytes, base64-encoded into a 28-character string.
             * (Most 3D Secure providers will return the base64-encoded version, which
             * is what you should specify here.)
             */
            cryptogram: string;

            /**
             * The Electronic Commerce Indicator (ECI) is returned by your 3D Secure
             * provider and indicates what degree of authentication was performed.
             */
            electronic_commerce_indicator?: ThreeDSecure.ElectronicCommerceIndicator;

            /**
             * The exemption requested via 3DS and accepted by the issuer at authentication time.
             */
            exemption_indicator?: ThreeDSecure.ExemptionIndicator;

            /**
             * Network specific 3DS fields. Network specific arguments require an
             * explicit card brand choice. The parameter `payment_method_options.card.network``
             * must be populated accordingly
             */
            network_options?: ThreeDSecure.NetworkOptions;

            /**
             * The challenge indicator (`threeDSRequestorChallengeInd`) which was requested in the
             * AReq sent to the card Issuer's ACS. A string containing 2 digits from 01-99.
             */
            requestor_challenge_indicator?: string;

            /**
             * For 3D Secure 1, the XID. For 3D Secure 2, the Directory Server
             * Transaction ID (dsTransID).
             */
            transaction_id: string;

            /**
             * The version of 3D Secure that was performed.
             */
            version: ThreeDSecure.Version;
          }

          namespace ThreeDSecure {
            type AresTransStatus = 'A' | 'C' | 'I' | 'N' | 'R' | 'U' | 'Y';

            type ElectronicCommerceIndicator = '01' | '02' | '05' | '06' | '07';

            type ExemptionIndicator = 'low_risk' | 'none';

            interface NetworkOptions {
              /**
               * Cartes Bancaires-specific 3DS fields.
               */
              cartes_bancaires?: NetworkOptions.CartesBancaires;
            }

            namespace NetworkOptions {
              interface CartesBancaires {
                /**
                 * The cryptogram calculation algorithm used by the card Issuer's ACS
                 * to calculate the Authentication cryptogram. Also known as `cavvAlgorithm`.
                 * messageExtension: CB-AVALGO
                 */
                cb_avalgo: CartesBancaires.CbAvalgo;

                /**
                 * The exemption indicator returned from Cartes Bancaires in the ARes.
                 * message extension: CB-EXEMPTION; string (4 characters)
                 * This is a 3 byte bitmap (low significant byte first and most significant
                 * bit first) that has been Base64 encoded
                 */
                cb_exemption?: string;

                /**
                 * The risk score returned from Cartes Bancaires in the ARes.
                 * message extension: CB-SCORE; numeric value 0-99
                 */
                cb_score?: number;
              }

              namespace CartesBancaires {
                type CbAvalgo = '0' | '1' | '2' | '3' | '4' | 'A';
              }
            }

            type Version = '1.0.2' | '2.1.0' | '2.2.0';
          }
        }

        interface CardPresent {
          /**
           * Request ability to capture this payment beyond the standard [authorization validity window](https://stripe.com/docs/terminal/features/extended-authorizations#authorization-validity)
           */
          request_extended_authorization?: boolean;

          /**
           * Request ability to [increment](https://stripe.com/docs/terminal/features/incremental-authorizations) this PaymentIntent if the combination of MCC and card brand is eligible. Check [incremental_authorization_supported](https://stripe.com/docs/api/charges/object#charge_object-payment_method_details-card_present-incremental_authorization_supported) in the [Confirm](https://stripe.com/docs/api/payment_intents/confirm) response to verify support.
           */
          request_incremental_authorization_support?: boolean;

          /**
           * This field was released by mistake and will be removed in the next major version
           */
          request_incremental_authorization?: CardPresent.RequestIncrementalAuthorization;
        }

        namespace CardPresent {
          type RequestIncrementalAuthorization = 'if_available' | 'never';
        }

        interface Cashapp {
          /**
           * Controls when the funds will be captured from the customer's account.
           *
           * If provided, this parameter will override the top level behavior of `capture_method` when finalizing the payment with this payment method type.
           *
           * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter will unset the stored value for this payment method type.
           */
          capture_method?: Stripe.Emptyable<'manual'>;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Stripe.Emptyable<Cashapp.SetupFutureUsage>;
        }

        namespace Cashapp {
          type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
        }

        interface CustomerBalance {
          /**
           * Configuration for the bank transfer funding type, if the `funding_type` is set to `bank_transfer`.
           */
          bank_transfer?: CustomerBalance.BankTransfer;

          /**
           * The funding method type to be used when there are not enough funds in the customer balance. Permitted values include: `bank_transfer`.
           */
          funding_type?: 'bank_transfer';

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        namespace CustomerBalance {
          interface BankTransfer {
            /**
             * Configuration for the eu_bank_transfer funding type.
             */
            eu_bank_transfer?: BankTransfer.EuBankTransfer;

            /**
             * List of address types that should be returned in the financial_addresses response. If not specified, all valid types will be returned.
             *
             * Permitted values include: `sort_code`, `zengin`, `iban`, or `spei`.
             */
            requested_address_types?: Array<BankTransfer.RequestedAddressType>;

            /**
             * The list of bank transfer types that this PaymentIntent is allowed to use for funding Permitted values include: `eu_bank_transfer`, `gb_bank_transfer`, `jp_bank_transfer`, `mx_bank_transfer`, or `us_bank_transfer`.
             */
            type: BankTransfer.Type;
          }

          namespace BankTransfer {
            interface EuBankTransfer {
              /**
               * The desired country code of the bank account information. Permitted values include: `BE`, `DE`, `ES`, `FR`, `IE`, or `NL`.
               */
              country: string;
            }

            type RequestedAddressType =
              | 'aba'
              | 'iban'
              | 'sepa'
              | 'sort_code'
              | 'spei'
              | 'swift'
              | 'zengin';

            type Type =
              | 'eu_bank_transfer'
              | 'gb_bank_transfer'
              | 'jp_bank_transfer'
              | 'mx_bank_transfer'
              | 'us_bank_transfer';
          }
        }

        interface Eps {
          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        interface Fpx {
          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        interface Giropay {
          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        interface Grabpay {
          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        interface Ideal {
          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Stripe.Emptyable<Ideal.SetupFutureUsage>;
        }

        namespace Ideal {
          type SetupFutureUsage = 'none' | 'off_session';
        }

        interface InteracPresent {}

        interface Klarna {
          /**
           * Controls when the funds will be captured from the customer's account.
           *
           * If provided, this parameter will override the top level behavior of `capture_method` when finalizing the payment with this payment method type.
           *
           * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter will unset the stored value for this payment method type.
           */
          capture_method?: Stripe.Emptyable<'manual'>;

          /**
           * Preferred language of the Klarna authorization page that the customer is redirected to
           */
          preferred_locale?: Klarna.PreferredLocale;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        namespace Klarna {
          type PreferredLocale =
            | 'cs-CZ'
            | 'da-DK'
            | 'de-AT'
            | 'de-CH'
            | 'de-DE'
            | 'el-GR'
            | 'en-AT'
            | 'en-AU'
            | 'en-BE'
            | 'en-CA'
            | 'en-CH'
            | 'en-CZ'
            | 'en-DE'
            | 'en-DK'
            | 'en-ES'
            | 'en-FI'
            | 'en-FR'
            | 'en-GB'
            | 'en-GR'
            | 'en-IE'
            | 'en-IT'
            | 'en-NL'
            | 'en-NO'
            | 'en-NZ'
            | 'en-PL'
            | 'en-PT'
            | 'en-SE'
            | 'en-US'
            | 'es-ES'
            | 'es-US'
            | 'fi-FI'
            | 'fr-BE'
            | 'fr-CA'
            | 'fr-CH'
            | 'fr-FR'
            | 'it-CH'
            | 'it-IT'
            | 'nb-NO'
            | 'nl-BE'
            | 'nl-NL'
            | 'pl-PL'
            | 'pt-PT'
            | 'sv-FI'
            | 'sv-SE';
        }

        interface Konbini {
          /**
           * An optional 10 to 11 digit numeric-only string determining the confirmation code at applicable convenience stores. Must not consist of only zeroes and could be rejected in case of insufficient uniqueness. We recommend to use the customer's phone number.
           */
          confirmation_number?: Stripe.Emptyable<string>;

          /**
           * The number of calendar days (between 1 and 60) after which Konbini payment instructions will expire. For example, if a PaymentIntent is confirmed with Konbini and `expires_after_days` set to 2 on Monday JST, the instructions will expire on Wednesday 23:59:59 JST. Defaults to 3 days.
           */
          expires_after_days?: Stripe.Emptyable<number>;

          /**
           * The timestamp at which the Konbini payment instructions will expire. Only one of `expires_after_days` or `expires_at` may be set.
           */
          expires_at?: Stripe.Emptyable<number>;

          /**
           * A product descriptor of up to 22 characters, which will appear to customers at the convenience store.
           */
          product_description?: Stripe.Emptyable<string>;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        interface Link {
          /**
           * Controls when the funds will be captured from the customer's account.
           *
           * If provided, this parameter will override the top level behavior of `capture_method` when finalizing the payment with this payment method type.
           *
           * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter will unset the stored value for this payment method type.
           */
          capture_method?: Stripe.Emptyable<'manual'>;

          /**
           * [Deprecated] This is a legacy parameter that no longer has any function.
           */
          persistent_token?: string;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Stripe.Emptyable<Link.SetupFutureUsage>;
        }

        namespace Link {
          type SetupFutureUsage = 'none' | 'off_session';
        }

        interface Mobilepay {
          /**
           * Controls when the funds will be captured from the customer's account.
           *
           * If provided, this parameter will override the top level behavior of `capture_method` when finalizing the payment with this payment method type.
           *
           * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter will unset the stored value for this payment method type.
           */
          capture_method?: Stripe.Emptyable<'manual'>;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        interface Multibanco {
          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        interface Oxxo {
          /**
           * The number of calendar days before an OXXO voucher expires. For example, if you create an OXXO voucher on Monday and you set expires_after_days to 2, the OXXO invoice will expire on Wednesday at 23:59 America/Mexico_City time.
           */
          expires_after_days?: number;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        interface P24 {
          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';

          /**
           * Confirm that the payer has accepted the P24 terms and conditions.
           */
          tos_shown_and_accepted?: boolean;
        }

        interface Paynow {
          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        interface Paypal {
          /**
           * Controls when the funds will be captured from the customer's account.
           */
          capture_method?: Stripe.Emptyable<'manual'>;

          /**
           * [Preferred locale](https://stripe.com/docs/payments/paypal/supported-locales) of the PayPal checkout page that the customer is redirected to.
           */
          preferred_locale?: Paypal.PreferredLocale;

          /**
           * A reference of the PayPal transaction visible to customer which is mapped to PayPal's invoice ID. This must be a globally unique ID if you have configured in your PayPal settings to block multiple payments per invoice ID.
           */
          reference?: string;

          /**
           * A reference of the PayPal transaction visible to customer which is mapped to PayPal's invoice ID. This must be a globally unique ID if you have configured in your PayPal settings to block multiple payments per invoice ID.
           */
          reference_id?: string;

          /**
           * The risk correlation ID for an on-session payment using a saved PayPal payment method.
           */
          risk_correlation_id?: string;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Stripe.Emptyable<Paypal.SetupFutureUsage>;

          /**
           * The Stripe connected account IDs of the sellers on the platform for this transaction (optional). Only allowed when [separate charges and transfers](https://stripe.com/docs/connect/separate-charges-and-transfers) are used.
           */
          subsellers?: Array<string>;
        }

        namespace Paypal {
          type PreferredLocale =
            | 'cs-CZ'
            | 'da-DK'
            | 'de-AT'
            | 'de-DE'
            | 'de-LU'
            | 'el-GR'
            | 'en-GB'
            | 'en-US'
            | 'es-ES'
            | 'fi-FI'
            | 'fr-BE'
            | 'fr-FR'
            | 'fr-LU'
            | 'hu-HU'
            | 'it-IT'
            | 'nl-BE'
            | 'nl-NL'
            | 'pl-PL'
            | 'pt-PT'
            | 'sk-SK'
            | 'sv-SE';

          type SetupFutureUsage = 'none' | 'off_session';
        }

        interface Payto {
          /**
           * Additional fields for Mandate creation. Only `purpose` field is configurable for PayTo PaymentIntent with `setup_future_usage=none`. Other fields are only applicable to PayTo PaymentIntent with `setup_future_usage=off_session`
           */
          mandate_options?: Payto.MandateOptions;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Stripe.Emptyable<Payto.SetupFutureUsage>;
        }

        namespace Payto {
          interface MandateOptions {
            /**
             * Amount that will be collected. It is required when `amount_type` is `fixed`.
             */
            amount?: number;

            /**
             * The type of amount that will be collected. The amount charged must be exact or up to the value of `amount` param for `fixed` or `maximum` type respectively.
             */
            amount_type?: MandateOptions.AmountType;

            /**
             * Date, in YYYY-MM-DD format, after which payments will not be collected. Defaults to no end date.
             */
            end_date?: string;

            /**
             * The periodicity at which payments will be collected.
             */
            payment_schedule?: MandateOptions.PaymentSchedule;

            /**
             * The number of payments that will be made during a payment period. Defaults to 1 except for when `payment_schedule` is `adhoc`. In that case, it defaults to no limit.
             */
            payments_per_period?: number;

            /**
             * The purpose for which payments are made. Defaults to retail.
             */
            purpose?: MandateOptions.Purpose;
          }

          namespace MandateOptions {
            type AmountType = 'fixed' | 'maximum';

            type PaymentSchedule =
              | 'adhoc'
              | 'annual'
              | 'daily'
              | 'fortnightly'
              | 'monthly'
              | 'quarterly'
              | 'semi_annual'
              | 'weekly';

            type Purpose =
              | 'dependant_support'
              | 'government'
              | 'loan'
              | 'mortgage'
              | 'other'
              | 'pension'
              | 'personal'
              | 'retail'
              | 'salary'
              | 'tax'
              | 'utility';
          }

          type SetupFutureUsage = 'none' | 'off_session';
        }

        interface Pix {
          /**
           * The number of seconds (between 10 and 1209600) after which Pix payment will expire. Defaults to 86400 seconds.
           */
          expires_after_seconds?: number;

          /**
           * The timestamp at which the Pix expires (between 10 and 1209600 seconds in the future). Defaults to 1 day in the future.
           */
          expires_at?: number;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        interface Promptpay {
          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        interface RevolutPay {
          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           */
          setup_future_usage?: Stripe.Emptyable<RevolutPay.SetupFutureUsage>;
        }

        namespace RevolutPay {
          type SetupFutureUsage = 'none' | 'off_session';
        }

        interface SepaDebit {
          /**
           * Additional fields for Mandate creation
           */
          mandate_options?: SepaDebit.MandateOptions;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Stripe.Emptyable<SepaDebit.SetupFutureUsage>;
        }

        namespace SepaDebit {
          interface MandateOptions {}

          type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
        }

        interface Sofort {
          /**
           * Language shown to the payer on redirect.
           */
          preferred_language?: Stripe.Emptyable<Sofort.PreferredLanguage>;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Stripe.Emptyable<Sofort.SetupFutureUsage>;
        }

        namespace Sofort {
          type PreferredLanguage =
            | 'de'
            | 'en'
            | 'es'
            | 'fr'
            | 'it'
            | 'nl'
            | 'pl';

          type SetupFutureUsage = 'none' | 'off_session';
        }

        interface Swish {
          /**
           * The order ID displayed in the Swish app after the payment is authorized.
           */
          reference?: Stripe.Emptyable<string>;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        interface UsBankAccount {
          /**
           * Additional fields for Financial Connections Session creation
           */
          financial_connections?: UsBankAccount.FinancialConnections;

          /**
           * Additional fields for Mandate creation
           */
          mandate_options?: UsBankAccount.MandateOptions;

          /**
           * Additional fields for network related functions
           */
          networks?: UsBankAccount.Networks;

          /**
           * Preferred transaction settlement speed
           */
          preferred_settlement_speed?: Stripe.Emptyable<
            UsBankAccount.PreferredSettlementSpeed
          >;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Stripe.Emptyable<UsBankAccount.SetupFutureUsage>;

          /**
           * Bank account verification method.
           */
          verification_method?: UsBankAccount.VerificationMethod;
        }

        namespace UsBankAccount {
          interface FinancialConnections {
            /**
             * Customize manual entry behavior
             */
            manual_entry?: FinancialConnections.ManualEntry;

            /**
             * The list of permissions to request. If this parameter is passed, the `payment_method` permission must be included. Valid permissions include: `balances`, `ownership`, `payment_method`, and `transactions`.
             */
            permissions?: Array<FinancialConnections.Permission>;

            /**
             * List of data features that you would like to retrieve upon account creation.
             */
            prefetch?: Array<FinancialConnections.Prefetch>;

            /**
             * For webview integrations only. Upon completing OAuth login in the native browser, the user will be redirected to this URL to return to your app.
             */
            return_url?: string;
          }

          namespace FinancialConnections {
            interface ManualEntry {
              /**
               * Settings for configuring manual entry of account details.
               */
              mode: ManualEntry.Mode;
            }

            namespace ManualEntry {
              type Mode = 'automatic' | 'custom';
            }

            type Permission =
              | 'balances'
              | 'ownership'
              | 'payment_method'
              | 'transactions';

            type Prefetch =
              | 'balances'
              | 'inferred_balances'
              | 'ownership'
              | 'transactions';
          }

          interface MandateOptions {
            /**
             * The method used to collect offline mandate customer acceptance.
             */
            collection_method?: Stripe.Emptyable<'paper'>;
          }

          interface Networks {
            /**
             * Triggers validations to run across the selected networks
             */
            requested?: Array<Networks.Requested>;
          }

          namespace Networks {
            type Requested = 'ach' | 'us_domestic_wire';
          }

          type PreferredSettlementSpeed = 'fastest' | 'standard';

          type SetupFutureUsage = 'none' | 'off_session' | 'on_session';

          type VerificationMethod = 'automatic' | 'instant' | 'microdeposits';
        }

        interface WechatPay {
          /**
           * The app ID registered with WeChat Pay. Only required when client is ios or android.
           */
          app_id?: string;

          /**
           * The client type that the end customer will pay from
           */
          client: WechatPay.Client;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        namespace WechatPay {
          type Client = 'android' | 'ios' | 'web';
        }

        interface Zip {
          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }
      }

      type SetupFutureUsage = 'off_session' | 'on_session';

      interface Shipping {
        /**
         * Shipping address.
         */
        address: Stripe.AddressParam;

        /**
         * The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc.
         */
        carrier?: string;

        /**
         * Recipient name.
         */
        name: string;

        /**
         * Recipient phone (including extension).
         */
        phone?: string;

        /**
         * The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, please separate them with commas.
         */
        tracking_number?: string;
      }

      interface TransferData {
        /**
         * The amount that will be transferred automatically when a charge succeeds.
         */
        amount?: number;
      }
    }

    interface PaymentIntentListParams extends PaginationParams {
      /**
       * A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp or a dictionary with a number of different query options.
       */
      created?: Stripe.RangeQueryParam | number;

      /**
       * Only return PaymentIntents for the customer that this customer ID specifies.
       */
      customer?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface PaymentIntentApplyCustomerBalanceParams {
      /**
       * Amount that you intend to apply to this PaymentIntent from the customer's cash balance.
       *
       * A positive integer representing how much to charge in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) (for example, 100 cents to charge 1 USD or 100 to charge 100 JPY, a zero-decimal currency).
       *
       * The maximum amount is the amount of the PaymentIntent.
       *
       * When you omit the amount, it defaults to the remaining amount requested on the PaymentIntent.
       */
      amount?: number;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface PaymentIntentCancelParams {
      /**
       * Reason for canceling this PaymentIntent. Possible values are: `duplicate`, `fraudulent`, `requested_by_customer`, or `abandoned`
       */
      cancellation_reason?: PaymentIntentCancelParams.CancellationReason;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    namespace PaymentIntentCancelParams {
      type CancellationReason =
        | 'abandoned'
        | 'duplicate'
        | 'fraudulent'
        | 'requested_by_customer';
    }

    interface PaymentIntentCaptureParams {
      /**
       * The amount to capture from the PaymentIntent, which must be less than or equal to the original amount. Any additional amount is automatically refunded. Defaults to the full `amount_capturable` if it's not provided.
       */
      amount_to_capture?: number;

      /**
       * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. The amount of the application fee collected will be capped at the total payment amount. For more information, see the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
       */
      application_fee_amount?: number;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Defaults to `true`. When capturing a PaymentIntent, setting `final_capture` to `false` notifies Stripe to not release the remaining uncaptured funds to make sure that they're captured in future requests. You can only use this setting when [multicapture](https://stripe.com/docs/payments/multicapture) is available for PaymentIntents.
       */
      final_capture?: boolean;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

      /**
       * Provides industry-specific information about the charge.
       */
      payment_details?: Stripe.Emptyable<
        PaymentIntentCaptureParams.PaymentDetails
      >;

      /**
       * For card charges, use [statement_descriptor_suffix](https://stripe.com/docs/payments/account/statement-descriptors#dynamic). Otherwise, you can use this value as the complete description of a charge on your customers' statements. It must contain at least one letter and be 1–22 characters long.
       */
      statement_descriptor?: string;

      /**
       * Provides information about a card payment that customers see on their statements. Concatenated with the prefix (shortened descriptor) or statement descriptor that's set on the account to form the complete statement descriptor. The concatenated descriptor must be 1-22 characters long.
       */
      statement_descriptor_suffix?: string;

      /**
       * The parameters that you can use to automatically create a transfer after the payment
       * is captured. Learn more about the [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
       */
      transfer_data?: PaymentIntentCaptureParams.TransferData;
    }

    namespace PaymentIntentCaptureParams {
      interface PaymentDetails {
        /**
         * Car rental details for this PaymentIntent.
         */
        car_rental?: PaymentDetails.CarRental;

        /**
         * Event details for this PaymentIntent
         */
        event_details?: PaymentDetails.EventDetails;

        /**
         * Flight reservation details for this PaymentIntent
         */
        flight?: PaymentDetails.Flight;

        /**
         * Lodging reservation details for this PaymentIntent
         */
        lodging?: PaymentDetails.Lodging;

        /**
         * Subscription details for this PaymentIntent
         */
        subscription?: PaymentDetails.Subscription;
      }

      namespace PaymentDetails {
        interface CarRental {
          /**
           * Affiliate details for this purchase.
           */
          affiliate?: CarRental.Affiliate;

          /**
           * The booking number associated with the car rental.
           */
          booking_number: string;

          /**
           * Class code of the car.
           */
          car_class_code?: string;

          /**
           * Make of the car.
           */
          car_make?: string;

          /**
           * Model of the car.
           */
          car_model?: string;

          /**
           * The name of the rental car company.
           */
          company?: string;

          /**
           * The customer service phone number of the car rental company.
           */
          customer_service_phone_number?: string;

          /**
           * Number of days the car is being rented.
           */
          days_rented: number;

          /**
           * Delivery details for this purchase.
           */
          delivery?: CarRental.Delivery;

          /**
           * The details of the passengers in the travel reservation
           */
          drivers?: Array<CarRental.Driver>;

          /**
           * List of additional charges being billed.
           */
          extra_charges?: Array<CarRental.ExtraCharge>;

          /**
           * Indicates if the customer did not keep nor cancel their booking.
           */
          no_show?: boolean;

          /**
           * Car pick-up address.
           */
          pickup_address?: Stripe.AddressParam;

          /**
           * Car pick-up time. Measured in seconds since the Unix epoch.
           */
          pickup_at: number;

          /**
           * Rental rate.
           */
          rate_amount?: number;

          /**
           * The frequency at which the rate amount is applied. One of `day`, `week` or `month`
           */
          rate_interval?: CarRental.RateInterval;

          /**
           * The name of the person or entity renting the car.
           */
          renter_name?: string;

          /**
           * Car return address.
           */
          return_address?: Stripe.AddressParam;

          /**
           * Car return time. Measured in seconds since the Unix epoch.
           */
          return_at: number;

          /**
           * Indicates whether the goods or services are tax-exempt or tax is not collected.
           */
          tax_exempt?: boolean;
        }

        namespace CarRental {
          interface Affiliate {
            /**
             * The name of the affiliate that originated the purchase.
             */
            name: string;
          }

          interface Delivery {
            /**
             * The delivery method for the payment
             */
            mode?: Delivery.Mode;

            /**
             * Details of the recipient.
             */
            recipient?: Delivery.Recipient;
          }

          namespace Delivery {
            type Mode = 'email' | 'phone' | 'pickup' | 'post';

            interface Recipient {
              /**
               * The email of the recipient the ticket is delivered to.
               */
              email?: string;

              /**
               * The name of the recipient the ticket is delivered to.
               */
              name?: string;

              /**
               * The phone number of the recipient the ticket is delivered to.
               */
              phone?: string;
            }
          }

          interface Driver {
            /**
             * Full name of the person or entity on the car reservation.
             */
            name: string;
          }

          type ExtraCharge =
            | 'extra_mileage'
            | 'gas'
            | 'late_return'
            | 'one_way_service'
            | 'parking_violation';

          type RateInterval = 'day' | 'month' | 'week';
        }

        interface EventDetails {
          /**
           * Indicates if the tickets are digitally checked when entering the venue.
           */
          access_controlled_venue?: boolean;

          /**
           * The event location's address.
           */
          address?: Stripe.AddressParam;

          /**
           * Affiliate details for this purchase.
           */
          affiliate?: EventDetails.Affiliate;

          /**
           * The name of the company
           */
          company?: string;

          /**
           * Delivery details for this purchase.
           */
          delivery?: EventDetails.Delivery;

          /**
           * Event end time. Measured in seconds since the Unix epoch.
           */
          ends_at?: number;

          /**
           * Type of the event entertainment (concert, sports event etc)
           */
          genre?: string;

          /**
           * The name of the event.
           */
          name: string;

          /**
           * Event start time. Measured in seconds since the Unix epoch.
           */
          starts_at?: number;
        }

        namespace EventDetails {
          interface Affiliate {
            /**
             * The name of the affiliate that originated the purchase.
             */
            name: string;
          }

          interface Delivery {
            /**
             * The delivery method for the payment
             */
            mode?: Delivery.Mode;

            /**
             * Details of the recipient.
             */
            recipient?: Delivery.Recipient;
          }

          namespace Delivery {
            type Mode = 'email' | 'phone' | 'pickup' | 'post';

            interface Recipient {
              /**
               * The email of the recipient the ticket is delivered to.
               */
              email?: string;

              /**
               * The name of the recipient the ticket is delivered to.
               */
              name?: string;

              /**
               * The phone number of the recipient the ticket is delivered to.
               */
              phone?: string;
            }
          }
        }

        interface Flight {
          /**
           * Affiliate details for this purchase.
           */
          affiliate?: Flight.Affiliate;

          /**
           * The agency number (i.e. International Air Transport Association (IATA) agency number) of the travel agency that made the booking.
           */
          agency_number?: string;

          /**
           * The International Air Transport Association (IATA) carrier code of the carrier that issued the ticket.
           */
          carrier?: string;

          /**
           * Delivery details for this purchase.
           */
          delivery?: Flight.Delivery;

          /**
           * The name of the person or entity on the reservation.
           */
          passenger_name?: string;

          /**
           * The details of the passengers in the travel reservation.
           */
          passengers?: Array<Flight.Passenger>;

          /**
           * The individual flight segments associated with the trip.
           */
          segments: Array<Flight.Segment>;

          /**
           * The ticket number associated with the travel reservation.
           */
          ticket_number?: string;
        }

        namespace Flight {
          interface Affiliate {
            /**
             * The name of the affiliate that originated the purchase.
             */
            name: string;
          }

          interface Delivery {
            /**
             * The delivery method for the payment
             */
            mode?: Delivery.Mode;

            /**
             * Details of the recipient.
             */
            recipient?: Delivery.Recipient;
          }

          namespace Delivery {
            type Mode = 'email' | 'phone' | 'pickup' | 'post';

            interface Recipient {
              /**
               * The email of the recipient the ticket is delivered to.
               */
              email?: string;

              /**
               * The name of the recipient the ticket is delivered to.
               */
              name?: string;

              /**
               * The phone number of the recipient the ticket is delivered to.
               */
              phone?: string;
            }
          }

          interface Passenger {
            /**
             * Full name of the person or entity on the flight reservation.
             */
            name: string;
          }

          interface Segment {
            /**
             * The flight segment amount.
             */
            amount?: number;

            /**
             * The International Air Transport Association (IATA) airport code for the arrival airport.
             */
            arrival_airport?: string;

            /**
             * The arrival time for the flight segment. Measured in seconds since the Unix epoch.
             */
            arrives_at?: number;

            /**
             * The International Air Transport Association (IATA) carrier code of the carrier operating the flight segment.
             */
            carrier?: string;

            /**
             * The departure time for the flight segment. Measured in seconds since the Unix epoch.
             */
            departs_at: number;

            /**
             * The International Air Transport Association (IATA) airport code for the departure airport.
             */
            departure_airport?: string;

            /**
             * The flight number associated with the segment
             */
            flight_number?: string;

            /**
             * The fare class for the segment.
             */
            service_class?: Segment.ServiceClass;
          }

          namespace Segment {
            type ServiceClass =
              | 'business'
              | 'economy'
              | 'first'
              | 'premium_economy';
          }
        }

        interface Lodging {
          /**
           * The lodging location's address.
           */
          address?: Stripe.AddressParam;

          /**
           * The number of adults on the booking
           */
          adults?: number;

          /**
           * Affiliate details for this purchase.
           */
          affiliate?: Lodging.Affiliate;

          /**
           * The booking number associated with the lodging reservation.
           */
          booking_number?: string;

          /**
           * The lodging category
           */
          category?: Lodging.Category;

          /**
           * Loding check-in time. Measured in seconds since the Unix epoch.
           */
          checkin_at: number;

          /**
           * Lodging check-out time. Measured in seconds since the Unix epoch.
           */
          checkout_at: number;

          /**
           * The customer service phone number of the lodging company.
           */
          customer_service_phone_number?: string;

          /**
           * The daily lodging room rate.
           */
          daily_room_rate_amount?: number;

          /**
           * Delivery details for this purchase.
           */
          delivery?: Lodging.Delivery;

          /**
           * List of additional charges being billed.
           */
          extra_charges?: Array<Lodging.ExtraCharge>;

          /**
           * Indicates whether the lodging location is compliant with the Fire Safety Act.
           */
          fire_safety_act_compliance?: boolean;

          /**
           * The name of the lodging location.
           */
          name?: string;

          /**
           * Indicates if the customer did not keep their booking while failing to cancel the reservation.
           */
          no_show?: boolean;

          /**
           * The number of rooms on the booking
           */
          number_of_rooms?: number;

          /**
           * The details of the passengers in the travel reservation
           */
          passengers?: Array<Lodging.Passenger>;

          /**
           * The phone number of the lodging location.
           */
          property_phone_number?: string;

          /**
           * The room class for this purchase.
           */
          room_class?: string;

          /**
           * The number of room nights
           */
          room_nights?: number;

          /**
           * The total tax amount associating with the room reservation.
           */
          total_room_tax_amount?: number;

          /**
           * The total tax amount
           */
          total_tax_amount?: number;
        }

        namespace Lodging {
          interface Affiliate {
            /**
             * The name of the affiliate that originated the purchase.
             */
            name: string;
          }

          type Category = 'hotel' | 'vacation_rental';

          interface Delivery {
            /**
             * The delivery method for the payment
             */
            mode?: Delivery.Mode;

            /**
             * Details of the recipient.
             */
            recipient?: Delivery.Recipient;
          }

          namespace Delivery {
            type Mode = 'email' | 'phone' | 'pickup' | 'post';

            interface Recipient {
              /**
               * The email of the recipient the ticket is delivered to.
               */
              email?: string;

              /**
               * The name of the recipient the ticket is delivered to.
               */
              name?: string;

              /**
               * The phone number of the recipient the ticket is delivered to.
               */
              phone?: string;
            }
          }

          type ExtraCharge =
            | 'gift_shop'
            | 'laundry'
            | 'mini_bar'
            | 'other'
            | 'restaurant'
            | 'telephone';

          interface Passenger {
            /**
             * Full name of the person or entity on the lodging reservation.
             */
            name: string;
          }
        }

        interface Subscription {
          /**
           * Affiliate details for this purchase.
           */
          affiliate?: Subscription.Affiliate;

          /**
           * Info whether the subscription will be auto renewed upon expiry.
           */
          auto_renewal?: boolean;

          /**
           * Subscription billing details for this purchase.
           */
          billing_interval?: Subscription.BillingInterval;

          /**
           * Subscription end time. Measured in seconds since the Unix epoch.
           */
          ends_at?: number;

          /**
           * Name of the product on subscription. e.g. Apple Music Subscription
           */
          name: string;

          /**
           * Subscription start time. Measured in seconds since the Unix epoch.
           */
          starts_at?: number;
        }

        namespace Subscription {
          interface Affiliate {
            /**
             * The name of the affiliate that originated the purchase.
             */
            name: string;
          }

          interface BillingInterval {
            /**
             * The number of intervals, as an whole number greater than 0. Stripe multiplies this by the interval type to get the overall duration.
             */
            count: number;

            /**
             * Specifies a type of interval unit. Either `day`, `week`, `month` or `year`.
             */
            interval: BillingInterval.Interval;
          }

          namespace BillingInterval {
            type Interval = 'day' | 'month' | 'week' | 'year';
          }
        }
      }

      interface TransferData {
        /**
         * The amount that will be transferred automatically when a charge succeeds.
         */
        amount?: number;
      }
    }

    interface PaymentIntentConfirmParams {
      /**
       * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. The amount of the application fee collected will be capped at the total payment amount. For more information, see the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
       */
      application_fee_amount?: Stripe.Emptyable<number>;

      /**
       * Controls when the funds will be captured from the customer's account.
       */
      capture_method?: PaymentIntentConfirmParams.CaptureMethod;

      /**
       * ID of the ConfirmationToken used to confirm this PaymentIntent.
       *
       * If the provided ConfirmationToken contains properties that are also being provided in this request, such as `payment_method`, then the values in this request will take precedence.
       */
      confirmation_token?: string;

      /**
       * Set to `true` to fail the payment attempt if the PaymentIntent transitions into `requires_action`. This parameter is intended for simpler integrations that do not handle customer actions, like [saving cards without authentication](https://stripe.com/docs/payments/save-card-without-authentication).
       */
      error_on_requires_action?: boolean;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * ID of the mandate that's used for this payment.
       */
      mandate?: string;

      mandate_data?: Stripe.Emptyable<
        | PaymentIntentConfirmParams.MandateData1
        | PaymentIntentConfirmParams.MandateData2
      >;

      /**
       * Set to `true` to indicate that the customer isn't in your checkout flow during this payment attempt and can't authenticate. Use this parameter in scenarios where you collect card details and [charge them later](https://stripe.com/docs/payments/cards/charging-saved-cards).
       */
      off_session?: boolean | PaymentIntentConfirmParams.OffSession;

      /**
       * Provides industry-specific information about the charge.
       */
      payment_details?: Stripe.Emptyable<
        PaymentIntentConfirmParams.PaymentDetails
      >;

      /**
       * ID of the payment method (a PaymentMethod, Card, or [compatible Source](https://stripe.com/docs/payments/payment-methods/transitioning#compatibility) object) to attach to this PaymentIntent.
       */
      payment_method?: string;

      /**
       * If provided, this hash will be used to create a PaymentMethod. The new PaymentMethod will appear
       * in the [payment_method](https://stripe.com/docs/api/payment_intents/object#payment_intent_object-payment_method)
       * property on the PaymentIntent.
       */
      payment_method_data?: PaymentIntentConfirmParams.PaymentMethodData;

      /**
       * Payment method-specific configuration for this PaymentIntent.
       */
      payment_method_options?: PaymentIntentConfirmParams.PaymentMethodOptions;

      /**
       * Options to configure Radar. Learn more about [Radar Sessions](https://stripe.com/docs/radar/radar-session).
       */
      radar_options?: PaymentIntentConfirmParams.RadarOptions;

      /**
       * Email address that the receipt for the resulting payment will be sent to. If `receipt_email` is specified for a payment in live mode, a receipt will be sent regardless of your [email settings](https://dashboard.stripe.com/account/emails).
       */
      receipt_email?: Stripe.Emptyable<string>;

      /**
       * The URL to redirect your customer back to after they authenticate or cancel their payment on the payment method's app or site.
       * If you'd prefer to redirect to a mobile application, you can alternatively supply an application URI scheme.
       * This parameter is only used for cards and other redirect-based payment methods.
       */
      return_url?: string;

      /**
       * Indicates that you intend to make future payments with this PaymentIntent's payment method.
       *
       * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
       *
       * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
       *
       * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
       */
      setup_future_usage?: Stripe.Emptyable<
        PaymentIntentConfirmParams.SetupFutureUsage
      >;

      /**
       * Shipping information for this PaymentIntent.
       */
      shipping?: Stripe.Emptyable<PaymentIntentConfirmParams.Shipping>;

      /**
       * Set to `true` when confirming server-side and using Stripe.js, iOS, or Android client-side SDKs to handle the next actions.
       */
      use_stripe_sdk?: boolean;
    }

    namespace PaymentIntentConfirmParams {
      type CaptureMethod = 'automatic' | 'automatic_async' | 'manual';

      interface MandateData1 {
        /**
         * This hash contains details about the customer acceptance of the Mandate.
         */
        customer_acceptance: MandateData1.CustomerAcceptance;
      }

      namespace MandateData1 {
        interface CustomerAcceptance {
          /**
           * The time at which the customer accepted the Mandate.
           */
          accepted_at?: number;

          /**
           * If this is a Mandate accepted offline, this hash contains details about the offline acceptance.
           */
          offline?: CustomerAcceptance.Offline;

          /**
           * If this is a Mandate accepted online, this hash contains details about the online acceptance.
           */
          online?: CustomerAcceptance.Online;

          /**
           * The type of customer acceptance information included with the Mandate. One of `online` or `offline`.
           */
          type: CustomerAcceptance.Type;
        }

        namespace CustomerAcceptance {
          interface Offline {}

          interface Online {
            /**
             * The IP address from which the Mandate was accepted by the customer.
             */
            ip_address: string;

            /**
             * The user agent of the browser from which the Mandate was accepted by the customer.
             */
            user_agent: string;
          }

          type Type = 'offline' | 'online';
        }
      }

      interface MandateData2 {
        /**
         * This hash contains details about the customer acceptance of the Mandate.
         */
        customer_acceptance: MandateData2.CustomerAcceptance;
      }

      namespace MandateData2 {
        interface CustomerAcceptance {
          /**
           * If this is a Mandate accepted online, this hash contains details about the online acceptance.
           */
          online: CustomerAcceptance.Online;

          /**
           * The type of customer acceptance information included with the Mandate.
           */
          type: 'online';
        }

        namespace CustomerAcceptance {
          interface Online {
            /**
             * The IP address from which the Mandate was accepted by the customer.
             */
            ip_address?: string;

            /**
             * The user agent of the browser from which the Mandate was accepted by the customer.
             */
            user_agent?: string;
          }
        }
      }

      type OffSession = 'one_off' | 'recurring';

      interface PaymentDetails {
        /**
         * Car rental details for this PaymentIntent.
         */
        car_rental?: PaymentDetails.CarRental;

        /**
         * Event details for this PaymentIntent
         */
        event_details?: PaymentDetails.EventDetails;

        /**
         * Flight reservation details for this PaymentIntent
         */
        flight?: PaymentDetails.Flight;

        /**
         * Lodging reservation details for this PaymentIntent
         */
        lodging?: PaymentDetails.Lodging;

        /**
         * Subscription details for this PaymentIntent
         */
        subscription?: PaymentDetails.Subscription;
      }

      namespace PaymentDetails {
        interface CarRental {
          /**
           * Affiliate details for this purchase.
           */
          affiliate?: CarRental.Affiliate;

          /**
           * The booking number associated with the car rental.
           */
          booking_number: string;

          /**
           * Class code of the car.
           */
          car_class_code?: string;

          /**
           * Make of the car.
           */
          car_make?: string;

          /**
           * Model of the car.
           */
          car_model?: string;

          /**
           * The name of the rental car company.
           */
          company?: string;

          /**
           * The customer service phone number of the car rental company.
           */
          customer_service_phone_number?: string;

          /**
           * Number of days the car is being rented.
           */
          days_rented: number;

          /**
           * Delivery details for this purchase.
           */
          delivery?: CarRental.Delivery;

          /**
           * The details of the passengers in the travel reservation
           */
          drivers?: Array<CarRental.Driver>;

          /**
           * List of additional charges being billed.
           */
          extra_charges?: Array<CarRental.ExtraCharge>;

          /**
           * Indicates if the customer did not keep nor cancel their booking.
           */
          no_show?: boolean;

          /**
           * Car pick-up address.
           */
          pickup_address?: Stripe.AddressParam;

          /**
           * Car pick-up time. Measured in seconds since the Unix epoch.
           */
          pickup_at: number;

          /**
           * Rental rate.
           */
          rate_amount?: number;

          /**
           * The frequency at which the rate amount is applied. One of `day`, `week` or `month`
           */
          rate_interval?: CarRental.RateInterval;

          /**
           * The name of the person or entity renting the car.
           */
          renter_name?: string;

          /**
           * Car return address.
           */
          return_address?: Stripe.AddressParam;

          /**
           * Car return time. Measured in seconds since the Unix epoch.
           */
          return_at: number;

          /**
           * Indicates whether the goods or services are tax-exempt or tax is not collected.
           */
          tax_exempt?: boolean;
        }

        namespace CarRental {
          interface Affiliate {
            /**
             * The name of the affiliate that originated the purchase.
             */
            name: string;
          }

          interface Delivery {
            /**
             * The delivery method for the payment
             */
            mode?: Delivery.Mode;

            /**
             * Details of the recipient.
             */
            recipient?: Delivery.Recipient;
          }

          namespace Delivery {
            type Mode = 'email' | 'phone' | 'pickup' | 'post';

            interface Recipient {
              /**
               * The email of the recipient the ticket is delivered to.
               */
              email?: string;

              /**
               * The name of the recipient the ticket is delivered to.
               */
              name?: string;

              /**
               * The phone number of the recipient the ticket is delivered to.
               */
              phone?: string;
            }
          }

          interface Driver {
            /**
             * Full name of the person or entity on the car reservation.
             */
            name: string;
          }

          type ExtraCharge =
            | 'extra_mileage'
            | 'gas'
            | 'late_return'
            | 'one_way_service'
            | 'parking_violation';

          type RateInterval = 'day' | 'month' | 'week';
        }

        interface EventDetails {
          /**
           * Indicates if the tickets are digitally checked when entering the venue.
           */
          access_controlled_venue?: boolean;

          /**
           * The event location's address.
           */
          address?: Stripe.AddressParam;

          /**
           * Affiliate details for this purchase.
           */
          affiliate?: EventDetails.Affiliate;

          /**
           * The name of the company
           */
          company?: string;

          /**
           * Delivery details for this purchase.
           */
          delivery?: EventDetails.Delivery;

          /**
           * Event end time. Measured in seconds since the Unix epoch.
           */
          ends_at?: number;

          /**
           * Type of the event entertainment (concert, sports event etc)
           */
          genre?: string;

          /**
           * The name of the event.
           */
          name: string;

          /**
           * Event start time. Measured in seconds since the Unix epoch.
           */
          starts_at?: number;
        }

        namespace EventDetails {
          interface Affiliate {
            /**
             * The name of the affiliate that originated the purchase.
             */
            name: string;
          }

          interface Delivery {
            /**
             * The delivery method for the payment
             */
            mode?: Delivery.Mode;

            /**
             * Details of the recipient.
             */
            recipient?: Delivery.Recipient;
          }

          namespace Delivery {
            type Mode = 'email' | 'phone' | 'pickup' | 'post';

            interface Recipient {
              /**
               * The email of the recipient the ticket is delivered to.
               */
              email?: string;

              /**
               * The name of the recipient the ticket is delivered to.
               */
              name?: string;

              /**
               * The phone number of the recipient the ticket is delivered to.
               */
              phone?: string;
            }
          }
        }

        interface Flight {
          /**
           * Affiliate details for this purchase.
           */
          affiliate?: Flight.Affiliate;

          /**
           * The agency number (i.e. International Air Transport Association (IATA) agency number) of the travel agency that made the booking.
           */
          agency_number?: string;

          /**
           * The International Air Transport Association (IATA) carrier code of the carrier that issued the ticket.
           */
          carrier?: string;

          /**
           * Delivery details for this purchase.
           */
          delivery?: Flight.Delivery;

          /**
           * The name of the person or entity on the reservation.
           */
          passenger_name?: string;

          /**
           * The details of the passengers in the travel reservation.
           */
          passengers?: Array<Flight.Passenger>;

          /**
           * The individual flight segments associated with the trip.
           */
          segments: Array<Flight.Segment>;

          /**
           * The ticket number associated with the travel reservation.
           */
          ticket_number?: string;
        }

        namespace Flight {
          interface Affiliate {
            /**
             * The name of the affiliate that originated the purchase.
             */
            name: string;
          }

          interface Delivery {
            /**
             * The delivery method for the payment
             */
            mode?: Delivery.Mode;

            /**
             * Details of the recipient.
             */
            recipient?: Delivery.Recipient;
          }

          namespace Delivery {
            type Mode = 'email' | 'phone' | 'pickup' | 'post';

            interface Recipient {
              /**
               * The email of the recipient the ticket is delivered to.
               */
              email?: string;

              /**
               * The name of the recipient the ticket is delivered to.
               */
              name?: string;

              /**
               * The phone number of the recipient the ticket is delivered to.
               */
              phone?: string;
            }
          }

          interface Passenger {
            /**
             * Full name of the person or entity on the flight reservation.
             */
            name: string;
          }

          interface Segment {
            /**
             * The flight segment amount.
             */
            amount?: number;

            /**
             * The International Air Transport Association (IATA) airport code for the arrival airport.
             */
            arrival_airport?: string;

            /**
             * The arrival time for the flight segment. Measured in seconds since the Unix epoch.
             */
            arrives_at?: number;

            /**
             * The International Air Transport Association (IATA) carrier code of the carrier operating the flight segment.
             */
            carrier?: string;

            /**
             * The departure time for the flight segment. Measured in seconds since the Unix epoch.
             */
            departs_at: number;

            /**
             * The International Air Transport Association (IATA) airport code for the departure airport.
             */
            departure_airport?: string;

            /**
             * The flight number associated with the segment
             */
            flight_number?: string;

            /**
             * The fare class for the segment.
             */
            service_class?: Segment.ServiceClass;
          }

          namespace Segment {
            type ServiceClass =
              | 'business'
              | 'economy'
              | 'first'
              | 'premium_economy';
          }
        }

        interface Lodging {
          /**
           * The lodging location's address.
           */
          address?: Stripe.AddressParam;

          /**
           * The number of adults on the booking
           */
          adults?: number;

          /**
           * Affiliate details for this purchase.
           */
          affiliate?: Lodging.Affiliate;

          /**
           * The booking number associated with the lodging reservation.
           */
          booking_number?: string;

          /**
           * The lodging category
           */
          category?: Lodging.Category;

          /**
           * Loding check-in time. Measured in seconds since the Unix epoch.
           */
          checkin_at: number;

          /**
           * Lodging check-out time. Measured in seconds since the Unix epoch.
           */
          checkout_at: number;

          /**
           * The customer service phone number of the lodging company.
           */
          customer_service_phone_number?: string;

          /**
           * The daily lodging room rate.
           */
          daily_room_rate_amount?: number;

          /**
           * Delivery details for this purchase.
           */
          delivery?: Lodging.Delivery;

          /**
           * List of additional charges being billed.
           */
          extra_charges?: Array<Lodging.ExtraCharge>;

          /**
           * Indicates whether the lodging location is compliant with the Fire Safety Act.
           */
          fire_safety_act_compliance?: boolean;

          /**
           * The name of the lodging location.
           */
          name?: string;

          /**
           * Indicates if the customer did not keep their booking while failing to cancel the reservation.
           */
          no_show?: boolean;

          /**
           * The number of rooms on the booking
           */
          number_of_rooms?: number;

          /**
           * The details of the passengers in the travel reservation
           */
          passengers?: Array<Lodging.Passenger>;

          /**
           * The phone number of the lodging location.
           */
          property_phone_number?: string;

          /**
           * The room class for this purchase.
           */
          room_class?: string;

          /**
           * The number of room nights
           */
          room_nights?: number;

          /**
           * The total tax amount associating with the room reservation.
           */
          total_room_tax_amount?: number;

          /**
           * The total tax amount
           */
          total_tax_amount?: number;
        }

        namespace Lodging {
          interface Affiliate {
            /**
             * The name of the affiliate that originated the purchase.
             */
            name: string;
          }

          type Category = 'hotel' | 'vacation_rental';

          interface Delivery {
            /**
             * The delivery method for the payment
             */
            mode?: Delivery.Mode;

            /**
             * Details of the recipient.
             */
            recipient?: Delivery.Recipient;
          }

          namespace Delivery {
            type Mode = 'email' | 'phone' | 'pickup' | 'post';

            interface Recipient {
              /**
               * The email of the recipient the ticket is delivered to.
               */
              email?: string;

              /**
               * The name of the recipient the ticket is delivered to.
               */
              name?: string;

              /**
               * The phone number of the recipient the ticket is delivered to.
               */
              phone?: string;
            }
          }

          type ExtraCharge =
            | 'gift_shop'
            | 'laundry'
            | 'mini_bar'
            | 'other'
            | 'restaurant'
            | 'telephone';

          interface Passenger {
            /**
             * Full name of the person or entity on the lodging reservation.
             */
            name: string;
          }
        }

        interface Subscription {
          /**
           * Affiliate details for this purchase.
           */
          affiliate?: Subscription.Affiliate;

          /**
           * Info whether the subscription will be auto renewed upon expiry.
           */
          auto_renewal?: boolean;

          /**
           * Subscription billing details for this purchase.
           */
          billing_interval?: Subscription.BillingInterval;

          /**
           * Subscription end time. Measured in seconds since the Unix epoch.
           */
          ends_at?: number;

          /**
           * Name of the product on subscription. e.g. Apple Music Subscription
           */
          name: string;

          /**
           * Subscription start time. Measured in seconds since the Unix epoch.
           */
          starts_at?: number;
        }

        namespace Subscription {
          interface Affiliate {
            /**
             * The name of the affiliate that originated the purchase.
             */
            name: string;
          }

          interface BillingInterval {
            /**
             * The number of intervals, as an whole number greater than 0. Stripe multiplies this by the interval type to get the overall duration.
             */
            count: number;

            /**
             * Specifies a type of interval unit. Either `day`, `week`, `month` or `year`.
             */
            interval: BillingInterval.Interval;
          }

          namespace BillingInterval {
            type Interval = 'day' | 'month' | 'week' | 'year';
          }
        }
      }

      interface PaymentMethodData {
        /**
         * If this is an `acss_debit` PaymentMethod, this hash contains details about the ACSS Debit payment method.
         */
        acss_debit?: PaymentMethodData.AcssDebit;

        /**
         * If this is an `affirm` PaymentMethod, this hash contains details about the Affirm payment method.
         */
        affirm?: PaymentMethodData.Affirm;

        /**
         * If this is an `AfterpayClearpay` PaymentMethod, this hash contains details about the AfterpayClearpay payment method.
         */
        afterpay_clearpay?: PaymentMethodData.AfterpayClearpay;

        /**
         * If this is an `Alipay` PaymentMethod, this hash contains details about the Alipay payment method.
         */
        alipay?: PaymentMethodData.Alipay;

        /**
         * If this is an `au_becs_debit` PaymentMethod, this hash contains details about the bank account.
         */
        au_becs_debit?: PaymentMethodData.AuBecsDebit;

        /**
         * If this is a `bacs_debit` PaymentMethod, this hash contains details about the Bacs Direct Debit bank account.
         */
        bacs_debit?: PaymentMethodData.BacsDebit;

        /**
         * If this is a `bancontact` PaymentMethod, this hash contains details about the Bancontact payment method.
         */
        bancontact?: PaymentMethodData.Bancontact;

        /**
         * Billing information associated with the PaymentMethod that may be used or required by particular types of payment methods.
         */
        billing_details?: PaymentMethodData.BillingDetails;

        /**
         * If this is a `blik` PaymentMethod, this hash contains details about the BLIK payment method.
         */
        blik?: PaymentMethodData.Blik;

        /**
         * If this is a `boleto` PaymentMethod, this hash contains details about the Boleto payment method.
         */
        boleto?: PaymentMethodData.Boleto;

        /**
         * If this is a `cashapp` PaymentMethod, this hash contains details about the Cash App Pay payment method.
         */
        cashapp?: PaymentMethodData.Cashapp;

        /**
         * If this is a `customer_balance` PaymentMethod, this hash contains details about the CustomerBalance payment method.
         */
        customer_balance?: PaymentMethodData.CustomerBalance;

        /**
         * If this is an `eps` PaymentMethod, this hash contains details about the EPS payment method.
         */
        eps?: PaymentMethodData.Eps;

        /**
         * If this is an `fpx` PaymentMethod, this hash contains details about the FPX payment method.
         */
        fpx?: PaymentMethodData.Fpx;

        /**
         * If this is a `giropay` PaymentMethod, this hash contains details about the Giropay payment method.
         */
        giropay?: PaymentMethodData.Giropay;

        /**
         * If this is a `grabpay` PaymentMethod, this hash contains details about the GrabPay payment method.
         */
        grabpay?: PaymentMethodData.Grabpay;

        /**
         * If this is an `ideal` PaymentMethod, this hash contains details about the iDEAL payment method.
         */
        ideal?: PaymentMethodData.Ideal;

        /**
         * If this is an `interac_present` PaymentMethod, this hash contains details about the Interac Present payment method.
         */
        interac_present?: PaymentMethodData.InteracPresent;

        /**
         * If this is a `klarna` PaymentMethod, this hash contains details about the Klarna payment method.
         */
        klarna?: PaymentMethodData.Klarna;

        /**
         * If this is a `konbini` PaymentMethod, this hash contains details about the Konbini payment method.
         */
        konbini?: PaymentMethodData.Konbini;

        /**
         * If this is an `Link` PaymentMethod, this hash contains details about the Link payment method.
         */
        link?: PaymentMethodData.Link;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.MetadataParam;

        /**
         * If this is a `mobilepay` PaymentMethod, this hash contains details about the MobilePay payment method.
         */
        mobilepay?: PaymentMethodData.Mobilepay;

        /**
         * If this is a `multibanco` PaymentMethod, this hash contains details about the Multibanco payment method.
         */
        multibanco?: PaymentMethodData.Multibanco;

        /**
         * If this is an `oxxo` PaymentMethod, this hash contains details about the OXXO payment method.
         */
        oxxo?: PaymentMethodData.Oxxo;

        /**
         * If this is a `p24` PaymentMethod, this hash contains details about the P24 payment method.
         */
        p24?: PaymentMethodData.P24;

        /**
         * If this is a `paynow` PaymentMethod, this hash contains details about the PayNow payment method.
         */
        paynow?: PaymentMethodData.Paynow;

        /**
         * If this is a `paypal` PaymentMethod, this hash contains details about the PayPal payment method.
         */
        paypal?: PaymentMethodData.Paypal;

        /**
         * If this is a `payto` PaymentMethod, this hash contains details about the PayTo payment method.
         */
        payto?: PaymentMethodData.Payto;

        /**
         * If this is a `pix` PaymentMethod, this hash contains details about the Pix payment method.
         */
        pix?: PaymentMethodData.Pix;

        /**
         * If this is a `promptpay` PaymentMethod, this hash contains details about the PromptPay payment method.
         */
        promptpay?: PaymentMethodData.Promptpay;

        /**
         * Options to configure Radar. See [Radar Session](https://stripe.com/docs/radar/radar-session) for more information.
         */
        radar_options?: PaymentMethodData.RadarOptions;

        /**
         * If this is a `Revolut Pay` PaymentMethod, this hash contains details about the Revolut Pay payment method.
         */
        revolut_pay?: PaymentMethodData.RevolutPay;

        /**
         * If this is a `sepa_debit` PaymentMethod, this hash contains details about the SEPA debit bank account.
         */
        sepa_debit?: PaymentMethodData.SepaDebit;

        /**
         * If this is a `sofort` PaymentMethod, this hash contains details about the SOFORT payment method.
         */
        sofort?: PaymentMethodData.Sofort;

        /**
         * If this is a `swish` PaymentMethod, this hash contains details about the Swish payment method.
         */
        swish?: PaymentMethodData.Swish;

        /**
         * If this is a Twint PaymentMethod, this hash contains details about the Twint payment method.
         */
        twint?: PaymentMethodData.Twint;

        /**
         * The type of the PaymentMethod. An additional hash is included on the PaymentMethod with a name matching this value. It contains additional information specific to the PaymentMethod type.
         */
        type: PaymentMethodData.Type;

        /**
         * If this is an `us_bank_account` PaymentMethod, this hash contains details about the US bank account payment method.
         */
        us_bank_account?: PaymentMethodData.UsBankAccount;

        /**
         * If this is an `wechat_pay` PaymentMethod, this hash contains details about the wechat_pay payment method.
         */
        wechat_pay?: PaymentMethodData.WechatPay;

        /**
         * If this is a `zip` PaymentMethod, this hash contains details about the Zip payment method.
         */
        zip?: PaymentMethodData.Zip;
      }

      namespace PaymentMethodData {
        interface AcssDebit {
          /**
           * Customer's bank account number.
           */
          account_number: string;

          /**
           * Institution number of the customer's bank.
           */
          institution_number: string;

          /**
           * Transit number of the customer's bank.
           */
          transit_number: string;
        }

        interface Affirm {}

        interface AfterpayClearpay {}

        interface Alipay {}

        interface AuBecsDebit {
          /**
           * The account number for the bank account.
           */
          account_number: string;

          /**
           * Bank-State-Branch number of the bank account.
           */
          bsb_number: string;
        }

        interface BacsDebit {
          /**
           * Account number of the bank account that the funds will be debited from.
           */
          account_number?: string;

          /**
           * Sort code of the bank account. (e.g., `10-20-30`)
           */
          sort_code?: string;
        }

        interface Bancontact {}

        interface BillingDetails {
          /**
           * Billing address.
           */
          address?: Stripe.Emptyable<Stripe.AddressParam>;

          /**
           * Email address.
           */
          email?: Stripe.Emptyable<string>;

          /**
           * Full name.
           */
          name?: Stripe.Emptyable<string>;

          /**
           * Billing phone number (including extension).
           */
          phone?: Stripe.Emptyable<string>;
        }

        interface Blik {}

        interface Boleto {
          /**
           * The tax ID of the customer (CPF for individual consumers or CNPJ for businesses consumers)
           */
          tax_id: string;
        }

        interface Cashapp {}

        interface CustomerBalance {}

        interface Eps {
          /**
           * The customer's bank.
           */
          bank?: Eps.Bank;
        }

        namespace Eps {
          type Bank =
            | 'arzte_und_apotheker_bank'
            | 'austrian_anadi_bank_ag'
            | 'bank_austria'
            | 'bankhaus_carl_spangler'
            | 'bankhaus_schelhammer_und_schattera_ag'
            | 'bawag_psk_ag'
            | 'bks_bank_ag'
            | 'brull_kallmus_bank_ag'
            | 'btv_vier_lander_bank'
            | 'capital_bank_grawe_gruppe_ag'
            | 'deutsche_bank_ag'
            | 'dolomitenbank'
            | 'easybank_ag'
            | 'erste_bank_und_sparkassen'
            | 'hypo_alpeadriabank_international_ag'
            | 'hypo_bank_burgenland_aktiengesellschaft'
            | 'hypo_noe_lb_fur_niederosterreich_u_wien'
            | 'hypo_oberosterreich_salzburg_steiermark'
            | 'hypo_tirol_bank_ag'
            | 'hypo_vorarlberg_bank_ag'
            | 'marchfelder_bank'
            | 'oberbank_ag'
            | 'raiffeisen_bankengruppe_osterreich'
            | 'schoellerbank_ag'
            | 'sparda_bank_wien'
            | 'volksbank_gruppe'
            | 'volkskreditbank_ag'
            | 'vr_bank_braunau';
        }

        interface Fpx {
          /**
           * Account holder type for FPX transaction
           */
          account_holder_type?: Fpx.AccountHolderType;

          /**
           * The customer's bank.
           */
          bank: Fpx.Bank;
        }

        namespace Fpx {
          type AccountHolderType = 'company' | 'individual';

          type Bank =
            | 'affin_bank'
            | 'agrobank'
            | 'alliance_bank'
            | 'ambank'
            | 'bank_islam'
            | 'bank_muamalat'
            | 'bank_of_china'
            | 'bank_rakyat'
            | 'bsn'
            | 'cimb'
            | 'deutsche_bank'
            | 'hong_leong_bank'
            | 'hsbc'
            | 'kfh'
            | 'maybank2e'
            | 'maybank2u'
            | 'ocbc'
            | 'pb_enterprise'
            | 'public_bank'
            | 'rhb'
            | 'standard_chartered'
            | 'uob';
        }

        interface Giropay {}

        interface Grabpay {}

        interface Ideal {
          /**
           * The customer's bank.
           */
          bank?: Ideal.Bank;
        }

        namespace Ideal {
          type Bank =
            | 'abn_amro'
            | 'asn_bank'
            | 'bunq'
            | 'handelsbanken'
            | 'ing'
            | 'knab'
            | 'moneyou'
            | 'n26'
            | 'nn'
            | 'rabobank'
            | 'regiobank'
            | 'revolut'
            | 'sns_bank'
            | 'triodos_bank'
            | 'van_lanschot'
            | 'yoursafe';
        }

        interface InteracPresent {}

        interface Klarna {
          /**
           * Customer's date of birth
           */
          dob?: Klarna.Dob;
        }

        namespace Klarna {
          interface Dob {
            /**
             * The day of birth, between 1 and 31.
             */
            day: number;

            /**
             * The month of birth, between 1 and 12.
             */
            month: number;

            /**
             * The four-digit year of birth.
             */
            year: number;
          }
        }

        interface Konbini {}

        interface Link {}

        interface Mobilepay {}

        interface Multibanco {}

        interface Oxxo {}

        interface P24 {
          /**
           * The customer's bank.
           */
          bank?: P24.Bank;
        }

        namespace P24 {
          type Bank =
            | 'alior_bank'
            | 'bank_millennium'
            | 'bank_nowy_bfg_sa'
            | 'bank_pekao_sa'
            | 'banki_spbdzielcze'
            | 'blik'
            | 'bnp_paribas'
            | 'boz'
            | 'citi_handlowy'
            | 'credit_agricole'
            | 'envelobank'
            | 'etransfer_pocztowy24'
            | 'getin_bank'
            | 'ideabank'
            | 'ing'
            | 'inteligo'
            | 'mbank_mtransfer'
            | 'nest_przelew'
            | 'noble_pay'
            | 'pbac_z_ipko'
            | 'plus_bank'
            | 'santander_przelew24'
            | 'tmobile_usbugi_bankowe'
            | 'toyota_bank'
            | 'velobank'
            | 'volkswagen_bank';
        }

        interface Paynow {}

        interface Paypal {}

        interface Payto {
          /**
           * The account number for the bank account.
           */
          account_number?: string;

          /**
           * Bank-State-Branch number of the bank account.
           */
          bsb_number?: string;

          /**
           * The PayID alias for the bank account.
           */
          pay_id?: string;
        }

        interface Pix {}

        interface Promptpay {}

        interface RadarOptions {
          /**
           * A [Radar Session](https://stripe.com/docs/radar/radar-session) is a snapshot of the browser metadata and device details that help Radar make more accurate predictions on your payments.
           */
          session?: string;
        }

        interface RevolutPay {}

        interface SepaDebit {
          /**
           * IBAN of the bank account.
           */
          iban: string;
        }

        interface Sofort {
          /**
           * Two-letter ISO code representing the country the bank account is located in.
           */
          country: Sofort.Country;
        }

        namespace Sofort {
          type Country = 'AT' | 'BE' | 'DE' | 'ES' | 'IT' | 'NL';
        }

        interface Swish {}

        interface Twint {}

        type Type =
          | 'acss_debit'
          | 'affirm'
          | 'afterpay_clearpay'
          | 'alipay'
          | 'au_becs_debit'
          | 'bacs_debit'
          | 'bancontact'
          | 'blik'
          | 'boleto'
          | 'cashapp'
          | 'customer_balance'
          | 'eps'
          | 'fpx'
          | 'giropay'
          | 'grabpay'
          | 'ideal'
          | 'klarna'
          | 'konbini'
          | 'link'
          | 'mobilepay'
          | 'multibanco'
          | 'oxxo'
          | 'p24'
          | 'paynow'
          | 'paypal'
          | 'payto'
          | 'pix'
          | 'promptpay'
          | 'revolut_pay'
          | 'sepa_debit'
          | 'sofort'
          | 'swish'
          | 'twint'
          | 'us_bank_account'
          | 'wechat_pay'
          | 'zip';

        interface UsBankAccount {
          /**
           * Account holder type: individual or company.
           */
          account_holder_type?: UsBankAccount.AccountHolderType;

          /**
           * Account number of the bank account.
           */
          account_number?: string;

          /**
           * Account type: checkings or savings. Defaults to checking if omitted.
           */
          account_type?: UsBankAccount.AccountType;

          /**
           * The ID of a Financial Connections Account to use as a payment method.
           */
          financial_connections_account?: string;

          /**
           * Routing number of the bank account.
           */
          routing_number?: string;
        }

        namespace UsBankAccount {
          type AccountHolderType = 'company' | 'individual';

          type AccountType = 'checking' | 'savings';
        }

        interface WechatPay {}

        interface Zip {}
      }

      interface PaymentMethodOptions {
        /**
         * If this is a `acss_debit` PaymentMethod, this sub-hash contains details about the ACSS Debit payment method options.
         */
        acss_debit?: Stripe.Emptyable<PaymentMethodOptions.AcssDebit>;

        /**
         * If this is an `affirm` PaymentMethod, this sub-hash contains details about the Affirm payment method options.
         */
        affirm?: Stripe.Emptyable<PaymentMethodOptions.Affirm>;

        /**
         * If this is a `afterpay_clearpay` PaymentMethod, this sub-hash contains details about the Afterpay Clearpay payment method options.
         */
        afterpay_clearpay?: Stripe.Emptyable<
          PaymentMethodOptions.AfterpayClearpay
        >;

        /**
         * If this is a `alipay` PaymentMethod, this sub-hash contains details about the Alipay payment method options.
         */
        alipay?: Stripe.Emptyable<PaymentMethodOptions.Alipay>;

        /**
         * If this is a `au_becs_debit` PaymentMethod, this sub-hash contains details about the AU BECS Direct Debit payment method options.
         */
        au_becs_debit?: Stripe.Emptyable<PaymentMethodOptions.AuBecsDebit>;

        /**
         * If this is a `bacs_debit` PaymentMethod, this sub-hash contains details about the BACS Debit payment method options.
         */
        bacs_debit?: Stripe.Emptyable<PaymentMethodOptions.BacsDebit>;

        /**
         * If this is a `bancontact` PaymentMethod, this sub-hash contains details about the Bancontact payment method options.
         */
        bancontact?: Stripe.Emptyable<PaymentMethodOptions.Bancontact>;

        /**
         * If this is a `blik` PaymentMethod, this sub-hash contains details about the BLIK payment method options.
         */
        blik?: Stripe.Emptyable<PaymentMethodOptions.Blik>;

        /**
         * If this is a `boleto` PaymentMethod, this sub-hash contains details about the Boleto payment method options.
         */
        boleto?: Stripe.Emptyable<PaymentMethodOptions.Boleto>;

        /**
         * Configuration for any card payments attempted on this PaymentIntent.
         */
        card?: Stripe.Emptyable<PaymentMethodOptions.Card>;

        /**
         * If this is a `card_present` PaymentMethod, this sub-hash contains details about the Card Present payment method options.
         */
        card_present?: Stripe.Emptyable<PaymentMethodOptions.CardPresent>;

        /**
         * If this is a `cashapp` PaymentMethod, this sub-hash contains details about the Cash App Pay payment method options.
         */
        cashapp?: Stripe.Emptyable<PaymentMethodOptions.Cashapp>;

        /**
         * If this is a `customer balance` PaymentMethod, this sub-hash contains details about the customer balance payment method options.
         */
        customer_balance?: Stripe.Emptyable<
          PaymentMethodOptions.CustomerBalance
        >;

        /**
         * If this is a `eps` PaymentMethod, this sub-hash contains details about the EPS payment method options.
         */
        eps?: Stripe.Emptyable<PaymentMethodOptions.Eps>;

        /**
         * If this is a `fpx` PaymentMethod, this sub-hash contains details about the FPX payment method options.
         */
        fpx?: Stripe.Emptyable<PaymentMethodOptions.Fpx>;

        /**
         * If this is a `giropay` PaymentMethod, this sub-hash contains details about the Giropay payment method options.
         */
        giropay?: Stripe.Emptyable<PaymentMethodOptions.Giropay>;

        /**
         * If this is a `grabpay` PaymentMethod, this sub-hash contains details about the Grabpay payment method options.
         */
        grabpay?: Stripe.Emptyable<PaymentMethodOptions.Grabpay>;

        /**
         * If this is a `ideal` PaymentMethod, this sub-hash contains details about the Ideal payment method options.
         */
        ideal?: Stripe.Emptyable<PaymentMethodOptions.Ideal>;

        /**
         * If this is a `interac_present` PaymentMethod, this sub-hash contains details about the Card Present payment method options.
         */
        interac_present?: Stripe.Emptyable<PaymentMethodOptions.InteracPresent>;

        /**
         * If this is a `klarna` PaymentMethod, this sub-hash contains details about the Klarna payment method options.
         */
        klarna?: Stripe.Emptyable<PaymentMethodOptions.Klarna>;

        /**
         * If this is a `konbini` PaymentMethod, this sub-hash contains details about the Konbini payment method options.
         */
        konbini?: Stripe.Emptyable<PaymentMethodOptions.Konbini>;

        /**
         * If this is a `link` PaymentMethod, this sub-hash contains details about the Link payment method options.
         */
        link?: Stripe.Emptyable<PaymentMethodOptions.Link>;

        /**
         * If this is a `MobilePay` PaymentMethod, this sub-hash contains details about the MobilePay payment method options.
         */
        mobilepay?: Stripe.Emptyable<PaymentMethodOptions.Mobilepay>;

        /**
         * If this is a `multibanco` PaymentMethod, this sub-hash contains details about the Multibanco payment method options.
         */
        multibanco?: Stripe.Emptyable<PaymentMethodOptions.Multibanco>;

        /**
         * If this is a `oxxo` PaymentMethod, this sub-hash contains details about the OXXO payment method options.
         */
        oxxo?: Stripe.Emptyable<PaymentMethodOptions.Oxxo>;

        /**
         * If this is a `p24` PaymentMethod, this sub-hash contains details about the Przelewy24 payment method options.
         */
        p24?: Stripe.Emptyable<PaymentMethodOptions.P24>;

        /**
         * If this is a `paynow` PaymentMethod, this sub-hash contains details about the PayNow payment method options.
         */
        paynow?: Stripe.Emptyable<PaymentMethodOptions.Paynow>;

        /**
         * If this is a `paypal` PaymentMethod, this sub-hash contains details about the PayPal payment method options.
         */
        paypal?: Stripe.Emptyable<PaymentMethodOptions.Paypal>;

        /**
         * If this is a `payto` PaymentMethod, this sub-hash contains details about the PayTo payment method options.
         */
        payto?: Stripe.Emptyable<PaymentMethodOptions.Payto>;

        /**
         * If this is a `pix` PaymentMethod, this sub-hash contains details about the Pix payment method options.
         */
        pix?: Stripe.Emptyable<PaymentMethodOptions.Pix>;

        /**
         * If this is a `promptpay` PaymentMethod, this sub-hash contains details about the PromptPay payment method options.
         */
        promptpay?: Stripe.Emptyable<PaymentMethodOptions.Promptpay>;

        /**
         * If this is a `revolut_pay` PaymentMethod, this sub-hash contains details about the Revolut Pay payment method options.
         */
        revolut_pay?: Stripe.Emptyable<PaymentMethodOptions.RevolutPay>;

        /**
         * If this is a `sepa_debit` PaymentIntent, this sub-hash contains details about the SEPA Debit payment method options.
         */
        sepa_debit?: Stripe.Emptyable<PaymentMethodOptions.SepaDebit>;

        /**
         * If this is a `sofort` PaymentMethod, this sub-hash contains details about the SOFORT payment method options.
         */
        sofort?: Stripe.Emptyable<PaymentMethodOptions.Sofort>;

        /**
         * If this is a `Swish` PaymentMethod, this sub-hash contains details about the Swish payment method options.
         */
        swish?: Stripe.Emptyable<PaymentMethodOptions.Swish>;

        /**
         * If this is a `us_bank_account` PaymentMethod, this sub-hash contains details about the US bank account payment method options.
         */
        us_bank_account?: Stripe.Emptyable<PaymentMethodOptions.UsBankAccount>;

        /**
         * If this is a `wechat_pay` PaymentMethod, this sub-hash contains details about the WeChat Pay payment method options.
         */
        wechat_pay?: Stripe.Emptyable<PaymentMethodOptions.WechatPay>;

        /**
         * If this is a `zip` PaymentMethod, this sub-hash contains details about the Zip payment method options.
         */
        zip?: Stripe.Emptyable<PaymentMethodOptions.Zip>;
      }

      namespace PaymentMethodOptions {
        interface AcssDebit {
          /**
           * Additional fields for Mandate creation
           */
          mandate_options?: AcssDebit.MandateOptions;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Stripe.Emptyable<AcssDebit.SetupFutureUsage>;

          /**
           * Bank account verification method.
           */
          verification_method?: AcssDebit.VerificationMethod;
        }

        namespace AcssDebit {
          interface MandateOptions {
            /**
             * A URL for custom mandate text to render during confirmation step.
             * The URL will be rendered with additional GET parameters `payment_intent` and `payment_intent_client_secret` when confirming a Payment Intent,
             * or `setup_intent` and `setup_intent_client_secret` when confirming a Setup Intent.
             */
            custom_mandate_url?: Stripe.Emptyable<string>;

            /**
             * Description of the mandate interval. Only required if 'payment_schedule' parameter is 'interval' or 'combined'.
             */
            interval_description?: string;

            /**
             * Payment schedule for the mandate.
             */
            payment_schedule?: MandateOptions.PaymentSchedule;

            /**
             * Transaction type of the mandate.
             */
            transaction_type?: MandateOptions.TransactionType;
          }

          namespace MandateOptions {
            type PaymentSchedule = 'combined' | 'interval' | 'sporadic';

            type TransactionType = 'business' | 'personal';
          }

          type SetupFutureUsage = 'none' | 'off_session' | 'on_session';

          type VerificationMethod = 'automatic' | 'instant' | 'microdeposits';
        }

        interface Affirm {
          /**
           * Controls when the funds will be captured from the customer's account.
           *
           * If provided, this parameter will override the top level behavior of `capture_method` when finalizing the payment with this payment method type.
           *
           * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter will unset the stored value for this payment method type.
           */
          capture_method?: Stripe.Emptyable<'manual'>;

          /**
           * Preferred language of the Affirm authorization page that the customer is redirected to.
           */
          preferred_locale?: string;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        interface AfterpayClearpay {
          /**
           * Controls when the funds will be captured from the customer's account.
           *
           * If provided, this parameter will override the top level behavior of `capture_method` when finalizing the payment with this payment method type.
           *
           * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter will unset the stored value for this payment method type.
           */
          capture_method?: Stripe.Emptyable<'manual'>;

          /**
           * An internal identifier or reference that this payment corresponds to. You must limit the identifier to 128 characters, and it can only contain letters, numbers, underscores, backslashes, and dashes.
           * This field differs from the statement descriptor and item name.
           */
          reference?: string;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        interface Alipay {
          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Stripe.Emptyable<Alipay.SetupFutureUsage>;
        }

        namespace Alipay {
          type SetupFutureUsage = 'none' | 'off_session';
        }

        interface AuBecsDebit {
          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Stripe.Emptyable<AuBecsDebit.SetupFutureUsage>;
        }

        namespace AuBecsDebit {
          type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
        }

        interface BacsDebit {
          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Stripe.Emptyable<BacsDebit.SetupFutureUsage>;
        }

        namespace BacsDebit {
          type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
        }

        interface Bancontact {
          /**
           * Preferred language of the Bancontact authorization page that the customer is redirected to.
           */
          preferred_language?: Bancontact.PreferredLanguage;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Stripe.Emptyable<Bancontact.SetupFutureUsage>;
        }

        namespace Bancontact {
          type PreferredLanguage = 'de' | 'en' | 'fr' | 'nl';

          type SetupFutureUsage = 'none' | 'off_session';
        }

        interface Blik {
          /**
           * The 6-digit BLIK code that a customer has generated using their banking application. Can only be set on confirmation.
           */
          code?: string;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Stripe.Emptyable<'none'>;
        }

        interface Boleto {
          /**
           * The number of calendar days before a Boleto voucher expires. For example, if you create a Boleto voucher on Monday and you set expires_after_days to 2, the Boleto invoice will expire on Wednesday at 23:59 America/Sao_Paulo time.
           */
          expires_after_days?: number;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Stripe.Emptyable<Boleto.SetupFutureUsage>;
        }

        namespace Boleto {
          type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
        }

        interface Card {
          /**
           * Controls when the funds will be captured from the customer's account.
           *
           * If provided, this parameter will override the top level behavior of `capture_method` when finalizing the payment with this payment method type.
           *
           * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter will unset the stored value for this payment method type.
           */
          capture_method?: Stripe.Emptyable<'manual'>;

          /**
           * A single-use `cvc_update` Token that represents a card CVC value. When provided, the CVC value will be verified during the card payment attempt. This parameter can only be provided during confirmation.
           */
          cvc_token?: string;

          /**
           * Installment configuration for payments attempted on this PaymentIntent (Mexico Only).
           *
           * For more information, see the [installments integration guide](https://stripe.com/docs/payments/installments).
           */
          installments?: Card.Installments;

          /**
           * Configuration options for setting up an eMandate for cards issued in India.
           */
          mandate_options?: Card.MandateOptions;

          /**
           * When specified, this parameter indicates that a transaction will be marked
           * as MOTO (Mail Order Telephone Order) and thus out of scope for SCA. This
           * parameter can only be provided during confirmation.
           */
          moto?: boolean;

          /**
           * Selected network to process this PaymentIntent on. Depends on the available networks of the card attached to the PaymentIntent. Can be only set confirm-time.
           */
          network?: Card.Network;

          /**
           * Request ability to [decrement the authorization](https://stripe.com/docs/payments/decremental-authorization) for this PaymentIntent.
           */
          request_decremental_authorization?: Card.RequestDecrementalAuthorization;

          /**
           * Request ability to [capture beyond the standard authorization validity window](https://stripe.com/docs/payments/extended-authorization) for this PaymentIntent.
           */
          request_extended_authorization?: Card.RequestExtendedAuthorization;

          /**
           * Request ability to [increment the authorization](https://stripe.com/docs/payments/incremental-authorization) for this PaymentIntent.
           */
          request_incremental_authorization?: Card.RequestIncrementalAuthorization;

          /**
           * Request ability to make [multiple captures](https://stripe.com/docs/payments/multicapture) for this PaymentIntent.
           */
          request_multicapture?: Card.RequestMulticapture;

          /**
           * Request ability to [overcapture](https://stripe.com/docs/payments/overcapture) for this PaymentIntent.
           */
          request_overcapture?: Card.RequestOvercapture;

          /**
           * We strongly recommend that you rely on our SCA Engine to automatically prompt your customers for authentication based on risk level and [other requirements](https://stripe.com/docs/strong-customer-authentication). However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option. If not provided, this value defaults to `automatic`. Read our guide on [manually requesting 3D Secure](https://stripe.com/docs/payments/3d-secure/authentication-flow#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine.
           */
          request_three_d_secure?: Card.RequestThreeDSecure;

          /**
           * When enabled, using a card that is attached to a customer will require the CVC to be provided again (i.e. using the cvc_token parameter).
           */
          require_cvc_recollection?: boolean;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Stripe.Emptyable<Card.SetupFutureUsage>;

          /**
           * Provides information about a card payment that customers see on their statements. Concatenated with the Kana prefix (shortened Kana descriptor) or Kana statement descriptor that's set on the account to form the complete statement descriptor. Maximum 22 characters. On card statements, the *concatenation* of both prefix and suffix (including separators) will appear truncated to 22 characters.
           */
          statement_descriptor_suffix_kana?: Stripe.Emptyable<string>;

          /**
           * Provides information about a card payment that customers see on their statements. Concatenated with the Kanji prefix (shortened Kanji descriptor) or Kanji statement descriptor that's set on the account to form the complete statement descriptor. Maximum 17 characters. On card statements, the *concatenation* of both prefix and suffix (including separators) will appear truncated to 17 characters.
           */
          statement_descriptor_suffix_kanji?: Stripe.Emptyable<string>;

          /**
           * Statement details for this payment intent. You can use this to override the merchant details shown on your customers' statements.
           */
          statement_details?: Stripe.Emptyable<Card.StatementDetails>;

          /**
           * If 3D Secure authentication was performed with a third-party provider,
           * the authentication details to use for this payment.
           */
          three_d_secure?: Card.ThreeDSecure;
        }

        namespace Card {
          interface Installments {
            /**
             * Setting to true enables installments for this PaymentIntent.
             * This will cause the response to contain a list of available installment plans.
             * Setting to false will prevent any selected plan from applying to a charge.
             */
            enabled?: boolean;

            /**
             * The selected installment plan to use for this payment attempt.
             * This parameter can only be provided during confirmation.
             */
            plan?: Stripe.Emptyable<Installments.Plan>;
          }

          namespace Installments {
            interface Plan {
              /**
               * For `fixed_count` installment plans, this is the number of installment payments your customer will make to their credit card.
               */
              count: number;

              /**
               * For `fixed_count` installment plans, this is the interval between installment payments your customer will make to their credit card.
               * One of `month`.
               */
              interval: 'month';

              /**
               * Type of installment plan, one of `fixed_count`.
               */
              type: 'fixed_count';
            }
          }

          interface MandateOptions {
            /**
             * Amount to be charged for future payments.
             */
            amount: number;

            /**
             * One of `fixed` or `maximum`. If `fixed`, the `amount` param refers to the exact amount to be charged in future payments. If `maximum`, the amount charged can be up to the value passed for the `amount` param.
             */
            amount_type: MandateOptions.AmountType;

            /**
             * A description of the mandate or subscription that is meant to be displayed to the customer.
             */
            description?: string;

            /**
             * End date of the mandate or subscription. If not provided, the mandate will be active until canceled. If provided, end date should be after start date.
             */
            end_date?: number;

            /**
             * Specifies payment frequency. One of `day`, `week`, `month`, `year`, or `sporadic`.
             */
            interval: MandateOptions.Interval;

            /**
             * The number of intervals between payments. For example, `interval=month` and `interval_count=3` indicates one payment every three months. Maximum of one year interval allowed (1 year, 12 months, or 52 weeks). This parameter is optional when `interval=sporadic`.
             */
            interval_count?: number;

            /**
             * Unique identifier for the mandate or subscription.
             */
            reference: string;

            /**
             * Start date of the mandate or subscription. Start date should not be lesser than yesterday.
             */
            start_date: number;

            /**
             * Specifies the type of mandates supported. Possible values are `india`.
             */
            supported_types?: Array<'india'>;
          }

          namespace MandateOptions {
            type AmountType = 'fixed' | 'maximum';

            type Interval = 'day' | 'month' | 'sporadic' | 'week' | 'year';
          }

          type Network =
            | 'amex'
            | 'cartes_bancaires'
            | 'diners'
            | 'discover'
            | 'eftpos_au'
            | 'interac'
            | 'jcb'
            | 'mastercard'
            | 'unionpay'
            | 'unknown'
            | 'visa';

          type RequestDecrementalAuthorization = 'if_available' | 'never';

          type RequestExtendedAuthorization = 'if_available' | 'never';

          type RequestIncrementalAuthorization = 'if_available' | 'never';

          type RequestMulticapture = 'if_available' | 'never';

          type RequestOvercapture = 'if_available' | 'never';

          type RequestThreeDSecure = 'any' | 'automatic' | 'challenge';

          type SetupFutureUsage = 'none' | 'off_session' | 'on_session';

          interface StatementDetails {
            /**
             * Please pass in an address that is within your Stripe user account country
             */
            address?: Stripe.AddressParam;

            /**
             * Phone number (e.g., a toll-free number that customers can call)
             */
            phone?: string;
          }

          interface ThreeDSecure {
            /**
             * The `transStatus` returned from the card Issuer's ACS in the ARes.
             */
            ares_trans_status?: ThreeDSecure.AresTransStatus;

            /**
             * The cryptogram, also known as the "authentication value" (AAV, CAVV or
             * AEVV). This value is 20 bytes, base64-encoded into a 28-character string.
             * (Most 3D Secure providers will return the base64-encoded version, which
             * is what you should specify here.)
             */
            cryptogram: string;

            /**
             * The Electronic Commerce Indicator (ECI) is returned by your 3D Secure
             * provider and indicates what degree of authentication was performed.
             */
            electronic_commerce_indicator?: ThreeDSecure.ElectronicCommerceIndicator;

            /**
             * The exemption requested via 3DS and accepted by the issuer at authentication time.
             */
            exemption_indicator?: ThreeDSecure.ExemptionIndicator;

            /**
             * Network specific 3DS fields. Network specific arguments require an
             * explicit card brand choice. The parameter `payment_method_options.card.network``
             * must be populated accordingly
             */
            network_options?: ThreeDSecure.NetworkOptions;

            /**
             * The challenge indicator (`threeDSRequestorChallengeInd`) which was requested in the
             * AReq sent to the card Issuer's ACS. A string containing 2 digits from 01-99.
             */
            requestor_challenge_indicator?: string;

            /**
             * For 3D Secure 1, the XID. For 3D Secure 2, the Directory Server
             * Transaction ID (dsTransID).
             */
            transaction_id: string;

            /**
             * The version of 3D Secure that was performed.
             */
            version: ThreeDSecure.Version;
          }

          namespace ThreeDSecure {
            type AresTransStatus = 'A' | 'C' | 'I' | 'N' | 'R' | 'U' | 'Y';

            type ElectronicCommerceIndicator = '01' | '02' | '05' | '06' | '07';

            type ExemptionIndicator = 'low_risk' | 'none';

            interface NetworkOptions {
              /**
               * Cartes Bancaires-specific 3DS fields.
               */
              cartes_bancaires?: NetworkOptions.CartesBancaires;
            }

            namespace NetworkOptions {
              interface CartesBancaires {
                /**
                 * The cryptogram calculation algorithm used by the card Issuer's ACS
                 * to calculate the Authentication cryptogram. Also known as `cavvAlgorithm`.
                 * messageExtension: CB-AVALGO
                 */
                cb_avalgo: CartesBancaires.CbAvalgo;

                /**
                 * The exemption indicator returned from Cartes Bancaires in the ARes.
                 * message extension: CB-EXEMPTION; string (4 characters)
                 * This is a 3 byte bitmap (low significant byte first and most significant
                 * bit first) that has been Base64 encoded
                 */
                cb_exemption?: string;

                /**
                 * The risk score returned from Cartes Bancaires in the ARes.
                 * message extension: CB-SCORE; numeric value 0-99
                 */
                cb_score?: number;
              }

              namespace CartesBancaires {
                type CbAvalgo = '0' | '1' | '2' | '3' | '4' | 'A';
              }
            }

            type Version = '1.0.2' | '2.1.0' | '2.2.0';
          }
        }

        interface CardPresent {
          /**
           * Request ability to capture this payment beyond the standard [authorization validity window](https://stripe.com/docs/terminal/features/extended-authorizations#authorization-validity)
           */
          request_extended_authorization?: boolean;

          /**
           * Request ability to [increment](https://stripe.com/docs/terminal/features/incremental-authorizations) this PaymentIntent if the combination of MCC and card brand is eligible. Check [incremental_authorization_supported](https://stripe.com/docs/api/charges/object#charge_object-payment_method_details-card_present-incremental_authorization_supported) in the [Confirm](https://stripe.com/docs/api/payment_intents/confirm) response to verify support.
           */
          request_incremental_authorization_support?: boolean;

          /**
           * This field was released by mistake and will be removed in the next major version
           */
          request_incremental_authorization?: CardPresent.RequestIncrementalAuthorization;
        }

        namespace CardPresent {
          type RequestIncrementalAuthorization = 'if_available' | 'never';
        }

        interface Cashapp {
          /**
           * Controls when the funds will be captured from the customer's account.
           *
           * If provided, this parameter will override the top level behavior of `capture_method` when finalizing the payment with this payment method type.
           *
           * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter will unset the stored value for this payment method type.
           */
          capture_method?: Stripe.Emptyable<'manual'>;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Stripe.Emptyable<Cashapp.SetupFutureUsage>;
        }

        namespace Cashapp {
          type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
        }

        interface CustomerBalance {
          /**
           * Configuration for the bank transfer funding type, if the `funding_type` is set to `bank_transfer`.
           */
          bank_transfer?: CustomerBalance.BankTransfer;

          /**
           * The funding method type to be used when there are not enough funds in the customer balance. Permitted values include: `bank_transfer`.
           */
          funding_type?: 'bank_transfer';

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        namespace CustomerBalance {
          interface BankTransfer {
            /**
             * Configuration for the eu_bank_transfer funding type.
             */
            eu_bank_transfer?: BankTransfer.EuBankTransfer;

            /**
             * List of address types that should be returned in the financial_addresses response. If not specified, all valid types will be returned.
             *
             * Permitted values include: `sort_code`, `zengin`, `iban`, or `spei`.
             */
            requested_address_types?: Array<BankTransfer.RequestedAddressType>;

            /**
             * The list of bank transfer types that this PaymentIntent is allowed to use for funding Permitted values include: `eu_bank_transfer`, `gb_bank_transfer`, `jp_bank_transfer`, `mx_bank_transfer`, or `us_bank_transfer`.
             */
            type: BankTransfer.Type;
          }

          namespace BankTransfer {
            interface EuBankTransfer {
              /**
               * The desired country code of the bank account information. Permitted values include: `BE`, `DE`, `ES`, `FR`, `IE`, or `NL`.
               */
              country: string;
            }

            type RequestedAddressType =
              | 'aba'
              | 'iban'
              | 'sepa'
              | 'sort_code'
              | 'spei'
              | 'swift'
              | 'zengin';

            type Type =
              | 'eu_bank_transfer'
              | 'gb_bank_transfer'
              | 'jp_bank_transfer'
              | 'mx_bank_transfer'
              | 'us_bank_transfer';
          }
        }

        interface Eps {
          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        interface Fpx {
          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        interface Giropay {
          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        interface Grabpay {
          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        interface Ideal {
          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Stripe.Emptyable<Ideal.SetupFutureUsage>;
        }

        namespace Ideal {
          type SetupFutureUsage = 'none' | 'off_session';
        }

        interface InteracPresent {}

        interface Klarna {
          /**
           * Controls when the funds will be captured from the customer's account.
           *
           * If provided, this parameter will override the top level behavior of `capture_method` when finalizing the payment with this payment method type.
           *
           * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter will unset the stored value for this payment method type.
           */
          capture_method?: Stripe.Emptyable<'manual'>;

          /**
           * Preferred language of the Klarna authorization page that the customer is redirected to
           */
          preferred_locale?: Klarna.PreferredLocale;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        namespace Klarna {
          type PreferredLocale =
            | 'cs-CZ'
            | 'da-DK'
            | 'de-AT'
            | 'de-CH'
            | 'de-DE'
            | 'el-GR'
            | 'en-AT'
            | 'en-AU'
            | 'en-BE'
            | 'en-CA'
            | 'en-CH'
            | 'en-CZ'
            | 'en-DE'
            | 'en-DK'
            | 'en-ES'
            | 'en-FI'
            | 'en-FR'
            | 'en-GB'
            | 'en-GR'
            | 'en-IE'
            | 'en-IT'
            | 'en-NL'
            | 'en-NO'
            | 'en-NZ'
            | 'en-PL'
            | 'en-PT'
            | 'en-SE'
            | 'en-US'
            | 'es-ES'
            | 'es-US'
            | 'fi-FI'
            | 'fr-BE'
            | 'fr-CA'
            | 'fr-CH'
            | 'fr-FR'
            | 'it-CH'
            | 'it-IT'
            | 'nb-NO'
            | 'nl-BE'
            | 'nl-NL'
            | 'pl-PL'
            | 'pt-PT'
            | 'sv-FI'
            | 'sv-SE';
        }

        interface Konbini {
          /**
           * An optional 10 to 11 digit numeric-only string determining the confirmation code at applicable convenience stores. Must not consist of only zeroes and could be rejected in case of insufficient uniqueness. We recommend to use the customer's phone number.
           */
          confirmation_number?: Stripe.Emptyable<string>;

          /**
           * The number of calendar days (between 1 and 60) after which Konbini payment instructions will expire. For example, if a PaymentIntent is confirmed with Konbini and `expires_after_days` set to 2 on Monday JST, the instructions will expire on Wednesday 23:59:59 JST. Defaults to 3 days.
           */
          expires_after_days?: Stripe.Emptyable<number>;

          /**
           * The timestamp at which the Konbini payment instructions will expire. Only one of `expires_after_days` or `expires_at` may be set.
           */
          expires_at?: Stripe.Emptyable<number>;

          /**
           * A product descriptor of up to 22 characters, which will appear to customers at the convenience store.
           */
          product_description?: Stripe.Emptyable<string>;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        interface Link {
          /**
           * Controls when the funds will be captured from the customer's account.
           *
           * If provided, this parameter will override the top level behavior of `capture_method` when finalizing the payment with this payment method type.
           *
           * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter will unset the stored value for this payment method type.
           */
          capture_method?: Stripe.Emptyable<'manual'>;

          /**
           * [Deprecated] This is a legacy parameter that no longer has any function.
           */
          persistent_token?: string;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Stripe.Emptyable<Link.SetupFutureUsage>;
        }

        namespace Link {
          type SetupFutureUsage = 'none' | 'off_session';
        }

        interface Mobilepay {
          /**
           * Controls when the funds will be captured from the customer's account.
           *
           * If provided, this parameter will override the top level behavior of `capture_method` when finalizing the payment with this payment method type.
           *
           * If `capture_method` is already set on the PaymentIntent, providing an empty value for this parameter will unset the stored value for this payment method type.
           */
          capture_method?: Stripe.Emptyable<'manual'>;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        interface Multibanco {
          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        interface Oxxo {
          /**
           * The number of calendar days before an OXXO voucher expires. For example, if you create an OXXO voucher on Monday and you set expires_after_days to 2, the OXXO invoice will expire on Wednesday at 23:59 America/Mexico_City time.
           */
          expires_after_days?: number;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        interface P24 {
          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';

          /**
           * Confirm that the payer has accepted the P24 terms and conditions.
           */
          tos_shown_and_accepted?: boolean;
        }

        interface Paynow {
          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        interface Paypal {
          /**
           * Controls when the funds will be captured from the customer's account.
           */
          capture_method?: Stripe.Emptyable<'manual'>;

          /**
           * [Preferred locale](https://stripe.com/docs/payments/paypal/supported-locales) of the PayPal checkout page that the customer is redirected to.
           */
          preferred_locale?: Paypal.PreferredLocale;

          /**
           * A reference of the PayPal transaction visible to customer which is mapped to PayPal's invoice ID. This must be a globally unique ID if you have configured in your PayPal settings to block multiple payments per invoice ID.
           */
          reference?: string;

          /**
           * A reference of the PayPal transaction visible to customer which is mapped to PayPal's invoice ID. This must be a globally unique ID if you have configured in your PayPal settings to block multiple payments per invoice ID.
           */
          reference_id?: string;

          /**
           * The risk correlation ID for an on-session payment using a saved PayPal payment method.
           */
          risk_correlation_id?: string;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Stripe.Emptyable<Paypal.SetupFutureUsage>;

          /**
           * The Stripe connected account IDs of the sellers on the platform for this transaction (optional). Only allowed when [separate charges and transfers](https://stripe.com/docs/connect/separate-charges-and-transfers) are used.
           */
          subsellers?: Array<string>;
        }

        namespace Paypal {
          type PreferredLocale =
            | 'cs-CZ'
            | 'da-DK'
            | 'de-AT'
            | 'de-DE'
            | 'de-LU'
            | 'el-GR'
            | 'en-GB'
            | 'en-US'
            | 'es-ES'
            | 'fi-FI'
            | 'fr-BE'
            | 'fr-FR'
            | 'fr-LU'
            | 'hu-HU'
            | 'it-IT'
            | 'nl-BE'
            | 'nl-NL'
            | 'pl-PL'
            | 'pt-PT'
            | 'sk-SK'
            | 'sv-SE';

          type SetupFutureUsage = 'none' | 'off_session';
        }

        interface Payto {
          /**
           * Additional fields for Mandate creation. Only `purpose` field is configurable for PayTo PaymentIntent with `setup_future_usage=none`. Other fields are only applicable to PayTo PaymentIntent with `setup_future_usage=off_session`
           */
          mandate_options?: Payto.MandateOptions;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Stripe.Emptyable<Payto.SetupFutureUsage>;
        }

        namespace Payto {
          interface MandateOptions {
            /**
             * Amount that will be collected. It is required when `amount_type` is `fixed`.
             */
            amount?: number;

            /**
             * The type of amount that will be collected. The amount charged must be exact or up to the value of `amount` param for `fixed` or `maximum` type respectively.
             */
            amount_type?: MandateOptions.AmountType;

            /**
             * Date, in YYYY-MM-DD format, after which payments will not be collected. Defaults to no end date.
             */
            end_date?: string;

            /**
             * The periodicity at which payments will be collected.
             */
            payment_schedule?: MandateOptions.PaymentSchedule;

            /**
             * The number of payments that will be made during a payment period. Defaults to 1 except for when `payment_schedule` is `adhoc`. In that case, it defaults to no limit.
             */
            payments_per_period?: number;

            /**
             * The purpose for which payments are made. Defaults to retail.
             */
            purpose?: MandateOptions.Purpose;
          }

          namespace MandateOptions {
            type AmountType = 'fixed' | 'maximum';

            type PaymentSchedule =
              | 'adhoc'
              | 'annual'
              | 'daily'
              | 'fortnightly'
              | 'monthly'
              | 'quarterly'
              | 'semi_annual'
              | 'weekly';

            type Purpose =
              | 'dependant_support'
              | 'government'
              | 'loan'
              | 'mortgage'
              | 'other'
              | 'pension'
              | 'personal'
              | 'retail'
              | 'salary'
              | 'tax'
              | 'utility';
          }

          type SetupFutureUsage = 'none' | 'off_session';
        }

        interface Pix {
          /**
           * The number of seconds (between 10 and 1209600) after which Pix payment will expire. Defaults to 86400 seconds.
           */
          expires_after_seconds?: number;

          /**
           * The timestamp at which the Pix expires (between 10 and 1209600 seconds in the future). Defaults to 1 day in the future.
           */
          expires_at?: number;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        interface Promptpay {
          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        interface RevolutPay {
          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           */
          setup_future_usage?: Stripe.Emptyable<RevolutPay.SetupFutureUsage>;
        }

        namespace RevolutPay {
          type SetupFutureUsage = 'none' | 'off_session';
        }

        interface SepaDebit {
          /**
           * Additional fields for Mandate creation
           */
          mandate_options?: SepaDebit.MandateOptions;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Stripe.Emptyable<SepaDebit.SetupFutureUsage>;
        }

        namespace SepaDebit {
          interface MandateOptions {}

          type SetupFutureUsage = 'none' | 'off_session' | 'on_session';
        }

        interface Sofort {
          /**
           * Language shown to the payer on redirect.
           */
          preferred_language?: Stripe.Emptyable<Sofort.PreferredLanguage>;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Stripe.Emptyable<Sofort.SetupFutureUsage>;
        }

        namespace Sofort {
          type PreferredLanguage =
            | 'de'
            | 'en'
            | 'es'
            | 'fr'
            | 'it'
            | 'nl'
            | 'pl';

          type SetupFutureUsage = 'none' | 'off_session';
        }

        interface Swish {
          /**
           * The order ID displayed in the Swish app after the payment is authorized.
           */
          reference?: Stripe.Emptyable<string>;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        interface UsBankAccount {
          /**
           * Additional fields for Financial Connections Session creation
           */
          financial_connections?: UsBankAccount.FinancialConnections;

          /**
           * Additional fields for Mandate creation
           */
          mandate_options?: UsBankAccount.MandateOptions;

          /**
           * Additional fields for network related functions
           */
          networks?: UsBankAccount.Networks;

          /**
           * Preferred transaction settlement speed
           */
          preferred_settlement_speed?: Stripe.Emptyable<
            UsBankAccount.PreferredSettlementSpeed
          >;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: Stripe.Emptyable<UsBankAccount.SetupFutureUsage>;

          /**
           * Bank account verification method.
           */
          verification_method?: UsBankAccount.VerificationMethod;
        }

        namespace UsBankAccount {
          interface FinancialConnections {
            /**
             * Customize manual entry behavior
             */
            manual_entry?: FinancialConnections.ManualEntry;

            /**
             * The list of permissions to request. If this parameter is passed, the `payment_method` permission must be included. Valid permissions include: `balances`, `ownership`, `payment_method`, and `transactions`.
             */
            permissions?: Array<FinancialConnections.Permission>;

            /**
             * List of data features that you would like to retrieve upon account creation.
             */
            prefetch?: Array<FinancialConnections.Prefetch>;

            /**
             * For webview integrations only. Upon completing OAuth login in the native browser, the user will be redirected to this URL to return to your app.
             */
            return_url?: string;
          }

          namespace FinancialConnections {
            interface ManualEntry {
              /**
               * Settings for configuring manual entry of account details.
               */
              mode: ManualEntry.Mode;
            }

            namespace ManualEntry {
              type Mode = 'automatic' | 'custom';
            }

            type Permission =
              | 'balances'
              | 'ownership'
              | 'payment_method'
              | 'transactions';

            type Prefetch =
              | 'balances'
              | 'inferred_balances'
              | 'ownership'
              | 'transactions';
          }

          interface MandateOptions {
            /**
             * The method used to collect offline mandate customer acceptance.
             */
            collection_method?: Stripe.Emptyable<'paper'>;
          }

          interface Networks {
            /**
             * Triggers validations to run across the selected networks
             */
            requested?: Array<Networks.Requested>;
          }

          namespace Networks {
            type Requested = 'ach' | 'us_domestic_wire';
          }

          type PreferredSettlementSpeed = 'fastest' | 'standard';

          type SetupFutureUsage = 'none' | 'off_session' | 'on_session';

          type VerificationMethod = 'automatic' | 'instant' | 'microdeposits';
        }

        interface WechatPay {
          /**
           * The app ID registered with WeChat Pay. Only required when client is ios or android.
           */
          app_id?: string;

          /**
           * The client type that the end customer will pay from
           */
          client: WechatPay.Client;

          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }

        namespace WechatPay {
          type Client = 'android' | 'ios' | 'web';
        }

        interface Zip {
          /**
           * Indicates that you intend to make future payments with this PaymentIntent's payment method.
           *
           * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
           *
           * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
           *
           * If `setup_future_usage` is already set and you are performing a request using a publishable key, you may only update the value from `on_session` to `off_session`.
           */
          setup_future_usage?: 'none';
        }
      }

      interface RadarOptions {
        /**
         * A [Radar Session](https://stripe.com/docs/radar/radar-session) is a snapshot of the browser metadata and device details that help Radar make more accurate predictions on your payments.
         */
        session?: string;
      }

      type SetupFutureUsage = 'off_session' | 'on_session';

      interface Shipping {
        /**
         * Shipping address.
         */
        address: Stripe.AddressParam;

        /**
         * The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc.
         */
        carrier?: string;

        /**
         * Recipient name.
         */
        name: string;

        /**
         * Recipient phone (including extension).
         */
        phone?: string;

        /**
         * The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, please separate them with commas.
         */
        tracking_number?: string;
      }
    }

    interface PaymentIntentDecrementAuthorizationParams {
      /**
       * The updated total amount that you intend to collect from the cardholder. This amount must be smaller than the currently authorized amount.
       */
      amount: number;

      /**
       * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. The amount of the application fee collected will be capped at the total payment amount. For more information, see the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
       */
      application_fee_amount?: number;

      /**
       * An arbitrary string attached to the object. Often useful for displaying to users.
       */
      description?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.MetadataParam;

      /**
       * The parameters used to automatically create a transfer after the payment is captured.
       * Learn more about the [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
       */
      transfer_data?: PaymentIntentDecrementAuthorizationParams.TransferData;
    }

    namespace PaymentIntentDecrementAuthorizationParams {
      interface TransferData {
        /**
         * The amount that will be transferred automatically when a charge succeeds.
         */
        amount?: number;
      }
    }

    interface PaymentIntentIncrementAuthorizationParams {
      /**
       * The updated total amount that you intend to collect from the cardholder. This amount must be greater than the currently authorized amount.
       */
      amount: number;

      /**
       * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. The amount of the application fee collected will be capped at the total payment amount. For more information, see the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
       */
      application_fee_amount?: number;

      /**
       * An arbitrary string attached to the object. Often useful for displaying to users.
       */
      description?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.MetadataParam;

      /**
       * For card charges, use [statement_descriptor_suffix](https://stripe.com/docs/payments/account/statement-descriptors#dynamic). Otherwise, you can use this value as the complete description of a charge on your customers' statements. It must contain at least one letter and be 1–22 characters long.
       */
      statement_descriptor?: string;

      /**
       * The parameters used to automatically create a transfer after the payment is captured.
       * Learn more about the [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
       */
      transfer_data?: PaymentIntentIncrementAuthorizationParams.TransferData;
    }

    namespace PaymentIntentIncrementAuthorizationParams {
      interface TransferData {
        /**
         * The amount that will be transferred automatically when a charge succeeds.
         */
        amount?: number;
      }
    }

    interface PaymentIntentSearchParams {
      /**
       * The search query string. See [search query language](https://stripe.com/docs/search#search-query-language) and the list of supported [query fields for payment intents](https://stripe.com/docs/search#query-fields-for-payment-intents).
       */
      query: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
       */
      limit?: number;

      /**
       * A cursor for pagination across multiple pages of results. Don't include this parameter on the first call. Use the next_page value returned in a previous response to request subsequent results.
       */
      page?: string;
    }

    interface PaymentIntentVerifyMicrodepositsParams {
      /**
       * Two positive integers, in *cents*, equal to the values of the microdeposits sent to the bank account.
       */
      amounts?: Array<number>;

      /**
       * A six-character code starting with SM present in the microdeposit sent to the bank account.
       */
      descriptor_code?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    class PaymentIntentsResource {
      /**
       * Creates a PaymentIntent object.
       *
       * After the PaymentIntent is created, attach a payment method and [confirm](https://stripe.com/docs/api/payment_intents/confirm)
       * to continue the payment. Learn more about <a href="/docs/payments/payment-intents">the available payment flows
       * with the Payment Intents API.
       *
       * When you use confirm=true during creation, it's equivalent to creating
       * and confirming the PaymentIntent in the same call. You can use any parameters
       * available in the [confirm API](https://stripe.com/docs/api/payment_intents/confirm) when you supply
       * confirm=true.
       */
      create(
        params: PaymentIntentCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentIntent>>;

      /**
       * Retrieves the details of a PaymentIntent that has previously been created.
       *
       * You can retrieve a PaymentIntent client-side using a publishable key when the client_secret is in the query string.
       *
       * If you retrieve a PaymentIntent with a publishable key, it only returns a subset of properties. Refer to the [payment intent](https://stripe.com/docs/api#payment_intent_object) object reference for more details.
       */
      retrieve(
        id: string,
        params?: PaymentIntentRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentIntent>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentIntent>>;

      /**
       * Updates properties on a PaymentIntent object without confirming.
       *
       * Depending on which properties you update, you might need to confirm the
       * PaymentIntent again. For example, updating the payment_method
       * always requires you to confirm the PaymentIntent again. If you prefer to
       * update and confirm at the same time, we recommend updating properties through
       * the [confirm API](https://stripe.com/docs/api/payment_intents/confirm) instead.
       */
      update(
        id: string,
        params?: PaymentIntentUpdateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentIntent>>;

      /**
       * Returns a list of PaymentIntents.
       */
      list(
        params?: PaymentIntentListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.PaymentIntent>;
      list(options?: RequestOptions): ApiListPromise<Stripe.PaymentIntent>;

      /**
       * Manually reconcile the remaining amount for a customer_balance PaymentIntent.
       */
      applyCustomerBalance(
        id: string,
        params?: PaymentIntentApplyCustomerBalanceParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentIntent>>;
      applyCustomerBalance(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentIntent>>;

      /**
       * You can cancel a PaymentIntent object when it's in one of these statuses: requires_payment_method, requires_capture, requires_confirmation, requires_action or, [in rare cases](https://stripe.com/docs/payments/intents), processing.
       *
       * After it's canceled, no additional charges are made by the PaymentIntent and any operations on the PaymentIntent fail with an error. For PaymentIntents with a status of requires_capture, the remaining amount_capturable is automatically refunded.
       *
       * You can't cancel the PaymentIntent for a Checkout Session. [Expire the Checkout Session](https://stripe.com/docs/api/checkout/sessions/expire) instead.
       */
      cancel(
        id: string,
        params?: PaymentIntentCancelParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentIntent>>;
      cancel(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentIntent>>;

      /**
       * Capture the funds of an existing uncaptured PaymentIntent when its status is requires_capture.
       *
       * Uncaptured PaymentIntents are cancelled a set number of days (7 by default) after their creation.
       *
       * Learn more about [separate authorization and capture](https://stripe.com/docs/payments/capture-later).
       */
      capture(
        id: string,
        params?: PaymentIntentCaptureParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentIntent>>;
      capture(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentIntent>>;

      /**
       * Confirm that your customer intends to pay with current or provided
       * payment method. Upon confirmation, the PaymentIntent will attempt to initiate
       * a payment.
       * If the selected payment method requires additional authentication steps, the
       * PaymentIntent will transition to the requires_action status and
       * suggest additional actions via next_action. If payment fails,
       * the PaymentIntent transitions to the requires_payment_method status or the
       * canceled status if the confirmation limit is reached. If
       * payment succeeds, the PaymentIntent will transition to the succeeded
       * status (or requires_capture, if capture_method is set to manual).
       * If the confirmation_method is automatic, payment may be attempted
       * using our [client SDKs](https://stripe.com/docs/stripe-js/reference#stripe-handle-card-payment)
       * and the PaymentIntent's [client_secret](https://stripe.com/docs/api#payment_intent_object-client_secret).
       * After next_actions are handled by the client, no additional
       * confirmation is required to complete the payment.
       * If the confirmation_method is manual, all payment attempts must be
       * initiated using a secret key.
       * If any actions are required for the payment, the PaymentIntent will
       * return to the requires_confirmation state
       * after those actions are completed. Your server needs to then
       * explicitly re-confirm the PaymentIntent to initiate the next payment
       * attempt.
       */
      confirm(
        id: string,
        params?: PaymentIntentConfirmParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentIntent>>;
      confirm(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentIntent>>;

      /**
       * Perform an decremental authorization on an eligible
       * [PaymentIntent](https://stripe.com/docs/api/payment_intents/object). To be eligible, the
       * PaymentIntent's status must be requires_capture and
       * [decremental_authorization.status](https://stripe.com/docs/api/charges/object#charge_object-payment_method_details-card-decremental_authorization)
       * must be available.
       *
       * Decremental authorizations decrease the authorized amount on your customer's card
       * to the new, lower amount provided. A single PaymentIntent can call this endpoint multiple times to further decrease the authorized amount.
       *
       * After decrement, the PaymentIntent object
       * returns with the updated
       * [amount](https://stripe.com/docs/api/payment_intents/object#payment_intent_object-amount).
       * The PaymentIntent will now be capturable up to the new authorized amount.
       *
       * Each PaymentIntent can have a maximum of 10 decremental or incremental authorization attempts, including declines.
       * After it's captured, a PaymentIntent can no longer be decremented.
       */
      decrementAuthorization(
        id: string,
        params: PaymentIntentDecrementAuthorizationParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentIntent>>;

      /**
       * Perform an incremental authorization on an eligible
       * [PaymentIntent](https://stripe.com/docs/api/payment_intents/object). To be eligible, the
       * PaymentIntent's status must be requires_capture and
       * [incremental_authorization_supported](https://stripe.com/docs/api/charges/object#charge_object-payment_method_details-card_present-incremental_authorization_supported)
       * must be true.
       *
       * Incremental authorizations attempt to increase the authorized amount on
       * your customer's card to the new, higher amount provided. Similar to the
       * initial authorization, incremental authorizations can be declined. A
       * single PaymentIntent can call this endpoint multiple times to further
       * increase the authorized amount.
       *
       * If the incremental authorization succeeds, the PaymentIntent object
       * returns with the updated
       * [amount](https://stripe.com/docs/api/payment_intents/object#payment_intent_object-amount).
       * If the incremental authorization fails, a
       * [card_declined](https://stripe.com/docs/error-codes#card-declined) error returns, and no other
       * fields on the PaymentIntent or Charge update. The PaymentIntent
       * object remains capturable for the previously authorized amount.
       *
       * Each PaymentIntent can have a maximum of 10 incremental authorization attempts, including declines.
       * After it's captured, a PaymentIntent can no longer be incremented.
       *
       * Learn more about [incremental authorizations](https://stripe.com/docs/terminal/features/incremental-authorizations).
       */
      incrementAuthorization(
        id: string,
        params: PaymentIntentIncrementAuthorizationParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentIntent>>;

      /**
       * Search for PaymentIntents you've previously created using Stripe's [Search Query Language](https://stripe.com/docs/search#search-query-language).
       * Don't use search in read-after-write flows where strict consistency is necessary. Under normal operating
       * conditions, data is searchable in less than a minute. Occasionally, propagation of new or updated data can be up
       * to an hour behind during outages. Search functionality is not available to merchants in India.
       */
      search(
        params: PaymentIntentSearchParams,
        options?: RequestOptions
      ): ApiSearchResultPromise<Stripe.PaymentIntent>;

      /**
       * Verifies microdeposits on a PaymentIntent object.
       */
      verifyMicrodeposits(
        id: string,
        params?: PaymentIntentVerifyMicrodepositsParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentIntent>>;
      verifyMicrodeposits(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentIntent>>;
    }
  }
}
