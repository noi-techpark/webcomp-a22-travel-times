// SPDX-FileCopyrightText: 2025 NOI Techpark <digital@noi.bz.it>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { Component, h, Prop } from "@stencil/core";

export type IconName = 'close'
  | 'chevron__left'
  | 'chevron__right'
  | 'today'
  ;

/**
 * (INTERNAL) render an icon.
 *
 * Icons are embedded inside the component (so far).
 *
 * Icon size can be changed by 'font-size' style
 */
@Component({
  tag: 'noi-icon',
  styleUrl: 'icon.css',
  shadow: true,
})
export class IconComponent {

  /**
   * icon name
   */
  @Prop()
  name: IconName | string;

  render() {
    switch (this.name) {
      case 'vehicle':
        return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M18.92 6.01L21 12V20C21 20.55 20.55 21 20 21H19C18.45 21 18 20.55 18 20V19H6V20C6 20.55 5.55 21 5 21H4C3.45 21 3 20.55 3 20V12L5.08 6.01C5.29 5.42 5.84 5 6.5 5H17.5C18.16 5 18.72 5.42 18.92 6.01ZM6.85 7L5.77 10.11H18.22L17.14 7H6.85ZM19 17V12H5V17H19ZM7.5 16C6.67157 16 6 15.3284 6 14.5C6 13.6716 6.67157 13 7.5 13C8.32843 13 9 13.6716 9 14.5C9 15.3284 8.32843 16 7.5 16ZM16.5 16C15.6716 16 15 15.3284 15 14.5C15 13.6716 15.6716 13 16.5 13C17.3284 13 18 13.6716 18 14.5C18 15.3284 17.3284 16 16.5 16Z"
                fill="currentColor"/>
        </svg>);
      case 'location_on':
        return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M12 2C8.13 2 5 5.13 5 9C5 13.17 9.42 18.92 11.24 21.11C11.64 21.59 12.37 21.59 12.77 21.11C14.58 18.92 19 13.17 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                fill="currentColor"/>
        </svg>);
      case 'arrow_upward':
        return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
                d="M20 12L18.59 13.41L13 7.83V20H11V7.83L5.41 13.41L4 12L12 4L20 12Z" fill="currentColor"/>
        </svg>);
      case 'arrow_downward':
        return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M20 12L18.59 10.59L13 16.17V4L11 4V16.17L5.41 10.59L4 12L12 20L20 12Z" fill="currentColor"/>
        </svg>);
      case 'access_time':
        return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z"
                fill="currentColor"/>
        </svg>);
    }
  }
}
