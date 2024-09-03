import React, { PropsWithChildren } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { AppStore, RootState, configurationStore } from '../store'
import { Provider } from 'react-redux'

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootState>
  store?: AppStore
}

// Function to render a component with Redux provider and optional preloaded state
export function renderwithProvider(
  element: React.ReactElement,
  {
    preloadedState = {},
    store = configurationStore(preloadedState),
    ...additionalOptions
  }: ExtendedRenderOptions = {}
) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>
  }

  return {
    store,
    ...render(element, {
      wrapper: Wrapper,
      ...additionalOptions
    })
  }
}
