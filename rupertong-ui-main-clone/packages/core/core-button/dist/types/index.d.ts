import { ReactElement, Ref } from 'react';
import { ButtonProps, ButtonVariants } from './types';
/**
 * Buttons make common actions immediately visible and easy to perform with one click or tap. They can be used for any type of action, including navigation.

 For text based buttons (`text` | `contained` | `outlined`), you can use the `label` or `children` prop for the button's display.

 For icon based buttons, you must specify a `children` prop.
 */
export declare const Button: <T extends ButtonVariants>(props: ButtonProps<T> & {
    ref?: Ref<HTMLButtonElement> | undefined;
}) => ReactElement;
export default Button;
//# sourceMappingURL=index.d.ts.map