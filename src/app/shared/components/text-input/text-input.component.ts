import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.sass']
})
export class TextInputComponent {
  @Input() type: string = 'text';
  @Input() label: string = '';
  @Input() name: string;
  @Input() id: string;

  @Input() value: string = '';
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  @Input() hasErrorText: boolean = true;
  @Input() required: boolean = true;
  @Input() formSubmitted: boolean = false;
  @Input() isLast: boolean = false;

  public changeValue(newValue: string): void {
    this.value = newValue;
    this.valueChange.emit(this.value);
  }
}