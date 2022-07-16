import Widget from "../../components/widgets/Widget";

const Widgets = () => {
  return (
    <div className="widgets">
      <Widget type="users" />
      <Widget type="order" />
      <Widget type="earning" />
      <Widget type="balance" />
    </div>
  );
};

export default Widgets;
