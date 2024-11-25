import PropTypes from 'prop-types';
const Heading = ({title,subtitle}) => {
  return (
    <div>
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-3 max-w-xl mx-auto text-md">{subtitle}</p>

    </div>
  );
};
Heading.propTypes={
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}
export default Heading;