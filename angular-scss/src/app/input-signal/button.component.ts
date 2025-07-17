import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  input,
  InputSignal,
  output,
  OutputEmitterRef,
  Signal,
  viewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Button component that wraps the NPDS button web component
 * for consistent styling and behavior across the application.
 */
@Component({
  selector: 'sis-lib-button',
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements AfterViewInit {
  /**
   * The appearance style of the button
   * @default 'filled'
   */
  appearance: InputSignal<'filled' | 'outlined'> = input<'filled' | 'outlined'>('filled');

  /**
   * The size of the button
   * @default 'md'
   */
  size: InputSignal<'sm' | 'md' | 'lg'> = input<'sm' | 'md' | 'lg'>('md');

  /**
   * The variant/color of the button
   * @default 'primary'
   */
  variant: InputSignal<'primary' | 'secondary' | 'negative'> = input<
    'primary' | 'secondary' | 'negative'
  >('primary');

  /**
   * The type attribute of the button
   * @default 'button'
   */
  type: InputSignal<'button' | 'submit' | 'reset'> = input<'button' | 'submit' | 'reset'>('button');

  /**
   * Whether the button is disabled
   * @default false
   */
  disabled: InputSignal<boolean> = input<boolean>(false);

  /**
   * Event emitted when the button is clicked
   */
  clicked: OutputEmitterRef<MouseEvent> = output<MouseEvent>();

  /**
   * Reference to the NPDS button element
   */
  npdsButton: Signal<ElementRef | undefined> = viewChild<ElementRef>('npdsButton');

  /**
   * The icon to be displayed on the button
   */
  icon: InputSignal<string | undefined> = input<string | undefined>(undefined);
  /**
   * Whether the button should be fluid (full width)
   * @default false
   */

  fluid: InputSignal<boolean> = input<boolean>(false);

  /**
   * The menu property is used to render a down chevron icon on a button that should trigger a menu.
   * @default false
   */
  menu: InputSignal<boolean> = input<boolean>(false);

  /**
   * When the href property is present, a button will be rendered as an <a> element instead of a <button> element.
   */
  href: InputSignal<string | undefined> = input<string | undefined>(undefined);

  /**
   * After the view is initialized, add click event listener to the NPDS button
   */
  ngAfterViewInit(): void {
    if (this.npdsButton()?.nativeElement) {
      // Use appropriate casting to ensure TypeScript recognizes the addEventListener method
      const buttonElement: HTMLElement = this.npdsButton()?.nativeElement as unknown as HTMLElement;
      buttonElement.addEventListener('click', (event: MouseEvent) => {
        if (!this.disabled()) {
          this.clicked.emit(event);
        }
      });
    }
  }
}
