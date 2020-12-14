function withData(Component) {
  const speakers = [
    {
      imageSrc: '',
      name: '',
    },
    {
      imageSrc: '',
      name: '',
    },
    {
      imageSrc: '',
      name: '',
    }
  ];
  return function () {
    return <Component
      speakers={speakers} />
  }
}
export default withData;