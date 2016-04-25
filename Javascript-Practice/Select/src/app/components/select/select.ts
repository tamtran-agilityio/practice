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
  HighlightPipe,
  stripTags
} from './select-pipes';
import {OptionsBehavior} from './select-interfaces';
import {escapeRegexp} from './common';

let optionsTemplate = `
    <ul *ngIf="optionsOpened && options && options.length > 0 && !itemObjects[0].hasChildren()"
        class="ui-select-choices ui-select-choices-content ui-select-dropdown dropdown-menu">
      <li class="ui-select-choices-group">
        <div *ngFor="#o of options"
             class="ui-select-choices-row"
             [class.active]="isActive(o)"
             (click)="selectMatch(o, $event)">
          <a href="javascript:void(0)" class="ui-select-choices-row-inner">
            <div [innerHtml]="o.text | highlight:inputValue"></div>
          </a>
        </div>
      </li>
    </ul>

    <ul *ngIf="optionsOpened && options && options.length > 0 && itemObjects[0].hasChildren()"
        class="ui-select-choices ui-select-choices-content ui-select-dropdown dropdown-menu">
      <li *ngFor="#c of options; #index=index" class="ui-select-choices-group">
        <div class="divider" *ngIf="index > 0"></div>
        <div class="ui-select-choices-group-label dropdown-header">{{c.text}}</div>

        <div *ngFor="#o of c.children"
             class="ui-select-choices-row"
             [class.active]="isActive(o)"
             (click)="selectMatch(o, $event)"
             [ngClass]="{'active': isActive(o)}">
          <a href="javascript:void(0)" class="ui-select-choices-row-inner">
            <div [innerHtml]="o.text | highlight:inputValue"></div>
          </a>
        </div>
      </li>
    </ul>
`;

@Component({
  selector: 'ng-select',
  pipes: [HighlightPipe],
  template: `
  <div tabindex="0"
     *ngIf="multiple === false"
     class="ui-select-container ui-select-bootstrap dropdown open">
    <div [ngClass]="{'ui-disabled': disabled}"></div>
    <div class="ui-select-match"
         *ngIf="!inputMode">
      <span tabindex="-1"
          class="btn btn-default btn-secondary form-control ui-select-toggle"
          style="outline: 0;">
        <span *ngIf="active.length <= 0" class="ui-select-placeholder text-muted">{{placeholder}}</span>
        <span *ngIf="active.length > 0" class="ui-select-match-text pull-left"
              [ngClass]="{'ui-select-allow-clear': allowClear && active.length > 0}"
              [innerHTML]="active[0].text"></span>
        <i class="dropdown-toggle pull-right"></i>
        <i class="caret pull-right"></i>
      </span>
    </div>
    <input type="text" autocomplete="false" tabindex="-1"
           [disabled]="disabled"
           class="form-control ui-select-search"
           *ngIf="inputMode"
           placeholder="{{active.length <= 0 ? placeholder : ''}}">
      ${optionsTemplate}
  </div>

  <div tabindex="0"
     *ngIf="multiple === true"
     class="ui-select-container ui-select-multiple ui-select-bootstrap dropdown form-control open">
    <div [ngClass]="{'ui-disabled': disabled}"></div>
    <span class="ui-select-match">
        <span *ngFor="#a of active">
            <span class="ui-select-match-item btn btn-default btn-secondary btn-xs"
                  tabindex="-1"
                  type="button"
                  [ngClass]="{'btn-default': true}">
               <span>{{a.text}}</span>
           </span>
        </span>
    </span>
    <input type="text"
           [disabled]="disabled"
           autocomplete="false"
           autocorrect="off"
           autocapitalize="off"
           spellcheck="false"
           class="ui-select-search input-xs"
           placeholder="{{active.length <= 0 ? placeholder : ''}}"
           role="combobox">
    ${optionsTemplate}
  </div>
  `
})
export class Select {
  @Input()
  allowClear:boolean = false;
  @Input()
  placeholder:string = '';
  @Input()
  initData:Array<any> = [];
  @Input()
  multiple:boolean = false;

  @Input() set items(value:Array<any>) {
    this._items = value;
    this.itemObjects = this._items.map((item:any) => new SelectItem(item));
  }

  @Input() set disabled(value:boolean) {
    this._disabled = value;
    if (this._disabled === true) {
    }
  }

  @Output()
  data:EventEmitter<any> = new EventEmitter();
  @Output()
  selected:EventEmitter<any> = new EventEmitter();
  @Output()
  removed:EventEmitter<any> = new EventEmitter();
  @Output()
  typed:EventEmitter<any> = new EventEmitter();

  public options:Array<SelectItem> = [];
  public itemObjects:Array<SelectItem> = [];
  public active:Array<SelectItem> = [];
  public activeOption:SelectItem;
  private offSideClickHandler:any;
  private inputMode:boolean = false;
  private optionsOpened:boolean = false;
  private behavior:OptionsBehavior;
  private inputValue:string = '';
  private _items:Array<any> = [];
  private _disabled:boolean = false;

  constructor(public element:ElementRef) {
  }

  ngOnInit() {
    if (this.initData) {
      this.active = this.initData.map(d => new SelectItem(d));
      this.data.emit(this.active);
    }
  }
}
