// SPDX-FileCopyrightText: 2025 NOI Techpark <digital@noi.bz.it>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { format } from "date-fns/format";

export function formatDateTime(date: Date): string {
  return format(date, 'dd/MM/yy - HH:mm');
}
