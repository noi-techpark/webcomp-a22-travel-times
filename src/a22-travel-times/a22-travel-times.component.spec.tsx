// SPDX-FileCopyrightText: 2025 NOI Techpark <digital@noi.bz.it>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

// mocks should come before other imports
import "../mocks";

import { h } from '@stencil/core';
import { newSpecPage } from "@stencil/core/testing";
import { A22TravelTimesComponent } from "./a22-travel-times.component";

describe('noi-a22-travel-times', () => {
  it('should render component', async () => {

    A22TravelTimesComponent.prototype._watchSize = () => null; // no ResizeObserver in mock
    A22TravelTimesComponent.prototype.connectedCallback = () => null; // need to learn stencil better to fix $hostElement$ issue

    const page = await newSpecPage({
      components: [A22TravelTimesComponent],
      template: () => (<noi-a22-travel-times></noi-a22-travel-times>),
    });

    expect(page.root.classList.contains('layout')).toBe(true);
  });


});
