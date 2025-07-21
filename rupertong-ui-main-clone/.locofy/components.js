
    import Button from '../packages/core/core-button/lib/index.tsx';import Wrapper from '../locofy/locofy-wrapper.tsx';
    
    
    const withWrapper = (WrappedComponent) => {
      return (props) => (
        <Wrapper>
          <WrappedComponent {...props} />
        </Wrapper>
      );
    };
    const WrappedButton = withWrapper(Button);
    export { WrappedButton as Button };
  