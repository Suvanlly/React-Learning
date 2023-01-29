// Higher Order Component which takes a component
// as input and returns another component
// "GlobalDataSource" is some global data source
function HOC(WrappedComponent, selectData) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        data: selectData(GlobalDataSource, props),
      };
    }
    componentDidMount() {
      // Listens to the changes added
      GlobalDataSource.addChangeListener(this.handleChange);
    }
    componentWillUnmount() {
      // Listens to the changes removed
      GlobalDataSource.removeChangeListener(this.handleChange);
    }
    handleChange() {
      this.setState({
        data: selectData(GlobalDataSource, this.props),
      });
    }
    render() {
      // Rendering the wrapped component with the latest data data
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
}
