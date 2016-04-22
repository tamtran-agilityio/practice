import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef
} from 'angular2/core';
import {
  CORE_DIRECTIVES,
  FORM_DIRECTIVES,
  NgClass,
  NgStyle
} from 'angular2/common';
import {SelectItem} from './select-item';
import {
  HightlightPipe,
  stripTags
} from './select-pipes';
import {OptionsBehavior} from './select-option';
import {escapeRegexp} from './common';

