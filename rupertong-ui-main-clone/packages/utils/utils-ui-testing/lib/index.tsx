import { ReactElement, ReactNode } from 'react';

import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { createMount, createShallow } from '@material-ui/core/test-utils';
import { RupertTheme, theme as designTheme } from '@rupertong-ui/core-theme';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import {
  EnzymeSelector,
  mount,
  ReactWrapper,
  shallow,
  ShallowWrapper,
} from 'enzyme';

type AllTheProvidersProps = {
  children?: ReactNode;
};

interface CustomRenderOptions extends RenderOptions {
  /** Theme to use for ThemeProvider */
  theme?: RupertTheme;
}

/**
 * Customized @test-library/react render method that includes all the providers used in the root application
 * @param ui Component to render
 * @param theme MUI theme
 * @param renderOptions: Extended RenderOptions from @test-library/react to include arguments for the providers
 */
const customRender = (
  ui: ReactElement,
  { theme, ...renderOptions }: CustomRenderOptions = {}
): RenderResult => {
  const mergedTheme = createTheme(theme, designTheme);

  const AllTheProviders = ({
    children,
  }: AllTheProvidersProps): ReactElement => {
    return <ThemeProvider theme={mergedTheme}>{children}</ThemeProvider>;
  };

  return render(ui, { wrapper: AllTheProviders, ...renderOptions });
};

const wrapComponentWithTheme = (
  children: ReactNode,
  theme = designTheme
) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

/**
 * Enzyme shallow wrapper with rupertong-ui ThemeProvider
 * @param component
 * @param untilSelector
 * @param dive
 * @returns ShallowWrapper
 */
const shallowWithTheme = (
  component: ReactElement,
  untilSelector: EnzymeSelector | undefined = undefined,
  dive = false
): ShallowWrapper =>
  createShallow({ untilSelector, dive })(wrapComponentWithTheme(component));

/**
 * Enzyme mount wrapper with rupertong-ui ThemeProvider
 * @param component
 * @returns ReactWrapper
 */
const mountWithTheme = (component: ReactElement): ReactWrapper =>
  createMount()(wrapComponentWithTheme(component));

// eslint-disable-next-line import/export
export * from '@testing-library/react';
export {
  // eslint-disable-next-line import/export
  customRender as render,
  shallowWithTheme,
  mountWithTheme,
  mount,
  shallow,
  ShallowWrapper,
  ReactWrapper,
};
