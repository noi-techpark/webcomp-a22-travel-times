// SPDX-FileCopyrightText: 2025 NOI Techpark <digital@noi.bz.it>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { ListResponseV2 } from "../ListResponse";
import { TravelTimesResponse } from "./TravelTimes";
import { TrafficTimesUtils } from "./traffic-times.utils";
import { TravelTimesShort } from "./TravelTimesShort";

// origin is used to track usage and traffic patterns
const ORIGIN = 'webcomp-a22-travel-times';

export class TravelTimesDataService {


  getTravelTimesData(): Promise<TravelTimesShort[]> {
    const whereQuery = `where=sorigin.eq.A22`;

    return fetch(`https://mobility.api.opendatahub.testingmachine.eu/v2/flat/LinkStation/*/latest?origin=${ORIGIN}&pagesize=-1&${whereQuery}`)
      .then(r => r.json() as Promise<ListResponseV2<TravelTimesResponse>>)
      .then(r => r.data)
      // .then(r => TrafficPredictionUtils.convertToShortInfo(r))
      .then(r => {
        console.log('getTravelTimesData', r);
        const shortInfoArr = TrafficTimesUtils.convertToShortInfo(r);
        return TrafficTimesUtils.sortFromNorthToSouth(shortInfoArr);
      }).then(r => {
        console.log('getTravelTimesData short', r);
        return r;
      });
  }

}

