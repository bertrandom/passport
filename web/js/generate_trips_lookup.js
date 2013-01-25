                var passport_epoch = moment('Dec 17, 2002');

                var trips_lookup = [];

                for (var i = 0; i < 3654; i++) {
                    var human_readable_date = passport_epoch.format('MMMM D, YYYY');

                    var current_country = {};
                    var been_countries = {};

                    for (trip_index in trips) {
                        trip = trips[trip_index];

                        var start_date = moment(trip[0]);
                        var end_date = moment(trip[1]);

                        if (passport_epoch >= start_date && passport_epoch <= end_date) {
                            current_country[trip[2]] = 1;
                        }

                        if (start_date <= passport_epoch) {
                            been_countries[trip[2]] = 1;
                        }

                    }

                    current_country = _.keys(current_country);
                    been_countries = _.keys(been_countries);

                    trips_lookup[i] = {
                        current: current_country,
                        been: been_countries
                    };

                    passport_epoch.add('days', 1);

                }

                $('#asdf')[0].innerHTML = JSON.stringify(trips_lookup);