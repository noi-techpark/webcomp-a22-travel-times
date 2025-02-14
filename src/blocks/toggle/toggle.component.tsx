// SPDX-FileCopyrightText: 2025 NOI Techpark <digital@noi.bz.it>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { Component, Event, EventEmitter, h, Host, Listen, Method, Prop, State } from "@stencil/core";

/**
 * Threshold in pixels to change value on dragging the handler
 */
const threshold = 4;

/**
 * (INTERNAL) render a toggle control.
 *
 * @part handle - Handle
 * @part track - Background container
 */
@Component({
  tag: 'noi-toggle',
  styleUrl: 'toggle.css',
  shadow: true,
})
export class ToggleComponent {

  /**
   * Checked state
   */
  @Prop({mutable: true, reflect: true})
  checked: boolean = false;

  /**
   *
   */
  @State()
  isDragging = false;

  // @Prop({mutable: true, reflect: true})
  // disabled: boolean = false;

  private dragStartX = 0;
  private dragNoMove = true;
  private dragStartChecked: boolean;

  /**
   * Emitted when checked value is changed by user click
   */
  @Event() noiChange: EventEmitter<{ checked: boolean }>;

  /**
   * Toggle checked state
   */
  @Method()
  async toggleValue() {
    this.checked = !this.checked;
    this.noiChange.emit({checked: this.checked});
  }

  startDrag(e) {
    this.dragStartX = e.clientX;
    this.dragStartChecked = this.checked;
    this.isDragging = true;
    this.dragNoMove = true;
  }

  @Listen('mouseup', {target: 'window'})
  stopDrag() {
    if ( !this.isDragging) {
      return;
    }

    this.isDragging = false;

    // emit value change only when pointer is released
    if (this.checked !== this.dragStartChecked) {
      this.noiChange.emit({checked: this.checked});
    }

    // 'dragNoMove' means user just clicked on the control
    if (this.dragNoMove) {
      this.toggleValue();
    }
    this.dragNoMove = true;
  }

  @Listen('mousemove', {target: 'window'})
  onDrag(e) {
    if ( !this.isDragging) {
      return;
    }

    const currentX = e.clientX;

    const distance = currentX - this.dragStartX;
    if (distance < -1 * threshold) {
      this.dragNoMove = false;
      if (this.checked !== false) {
        this.dragStartX = currentX;
        this.checked = false;
      }
    }
    if (distance > threshold) {
      this.dragNoMove = false;
      if (this.checked !== true) {
        this.checked = true;
        this.dragStartX = currentX;
      }
    }
    // don't emit state here
  }

  render() {
    return (<Host class={this.isDragging ? 'dragging' : ''}>
      <input class="native-input" type="checkbox" checked={this.checked} onChange={() => this.toggleValue()}/>
      <div class="track" part="track"
           onMouseDown={(e) => this.startDrag(e)}>
        <div class="handle" part="handle"></div>
      </div>
    </Host>);
  }
}
