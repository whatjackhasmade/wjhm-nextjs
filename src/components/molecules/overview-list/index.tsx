import StyledOverviewList from './overview-list.styles';

type OverviewListProps = {
  items: [
    {
      id?: string;
      value: string;
    },
  ];
  title?: string;
};

const OverviewList = (props: OverviewListProps) => {
  const { items, title = `What you will learn` } = props;

  const hasItems = items?.length > 0;
  if (!hasItems) return null;

  const filteredItems = items.filter(({ value }) => value);
  const hasFiltered = filteredItems?.length > 0;
  if (!hasFiltered) return null;

  return (
    <StyledOverviewList className="overview-list">
      <div className="overview-list__title">
        <h2 className="h3">{title}</h2>
      </div>
      <ul className="overview-list__list">
        {filteredItems.map(({ id, value }) => {
          if (!id) return <li key={value}>{value}</li>;
          return (
            <li key={value}>
              <a href={`#${id}`}>{value}</a>
            </li>
          );
        })}
      </ul>
    </StyledOverviewList>
  );
};

export default OverviewList;
