import { ChevronDown } from "react-iconly";

const Card = ({ children, card, title, bg = "#fff", title_col, key }) => {
  return (
    <div
      className="card "
      style={{
        backgroundColor: card?.bg,
      }}
      key={key}
    >
      <div className="icon-container">
        {card?.icon === undefined || null ? (
          <p className="heading-g">{title}</p>
        ) : (
          <span
            className="icon-style"
            style={{
              backgroundColor: card?.iconColor,
            }}
          >
            <card.icon
              style={{
                color: card.color ? card?.color : "#fff",
                width: "25px",
              }}
            />
          </span>
        )}
        <div className="disabled">
          <span>This week</span>
          <ChevronDown className="icon" />
        </div>
      </div>

      {card && (
        <div
          style={{
            color: card.title === "Abandoned Cart" ? "#000" : title_col,
          }}
          className={card?.estimate2 ? "title three-col" : "title"}
        >
          <div>
            <p
              style={{
                color: card.title === "Abandoned Cart" ? "red" : title_col,
              }}
            >
              {card?.title}
            </p>
            <h2
              className="estimate"
              style={{
                color: card.title === "Abandoned Cart" ? "#000" : title_col,
              }}
            >
              {card?.estimate}
              <small className="percent">{card?.interest2}</small>
            </h2>
          </div>
          <div>
            <p
              style={{
                color: card.title === "Abandoned Cart" ? "#000" : title_col,
              }}
            >
              {" "}
              {card?.subtitle}
            </p>
            <h2
              className="estimate"
              style={{
                color: card.title === "Abandoned Cart" ? "#000" : title_col,
              }}
            >
              {card?.estimatePercent}{" "}
              <small
                className="percent"
                style={{
                  color: card.title === "Abandoned Cart" ? "#000" : title_col,
                }}
              >
                {card?.interest}
              </small>
            </h2>
          </div>
          <div>
            <p> {card?.title2}</p>
            <h2 className="estimate">{card?.estimate2} </h2>
          </div>
        </div>
      )}

      <div> {children}</div>
    </div>
  );
};

export default Card;
