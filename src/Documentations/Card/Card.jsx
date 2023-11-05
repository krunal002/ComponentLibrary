import {
  CardWithBadge,
  CardWithDismiss,
  CardWithTextOverlay,
  HorizontalCard,
  TextOnlyCard,
  VerticleCard
} from "../../Components/Card/Card";
import "./Card.css";

const Card = () => {
  return (
    <main>
      <h1 className="card-heading">Card Components</h1>
      {/* 1 */}
      <h2>Card With Badge Component</h2>
      <p>
        Card is a flexible component used to group and display content in a
        clear and concise format.
      </p>
      <CardWithBadge
        title={"Title"}
        content={"Card content with badge."}
        badge={"New"}
      />
      <br />
      <h3>How to use Card With Badge?</h3>
      <iframe
        title="card-with-badge"
        src="https://carbon.now.sh/embed/1Xy8AyW5ZeNqhnzyOFeC"
        sandbox="allow-scripts allow-same-origin"
        className="card-iframe-component"
      ></iframe>

      {/* 2 */}
      <h2>Card With Dismiss Component</h2>
      <p>
        Card is a flexible component used to group and display content in a
        clear and concise format.
      </p>
      <CardWithDismiss
        title={"Title"}
        content={"Card content with dismiss option."}
      />
      <br />
      <h3>How to use Card With Dismiss Option?</h3>
      <iframe
        title="card-with-dismiss"
        src="https://carbon.now.sh/embed/7oCQyZzaP1WL8sAZTF5G"
        sandbox="allow-scripts allow-same-origin"
        className="card-iframe-component"
      ></iframe>

      {/* 4 */}
      <h2>Text Only Card Component</h2>
      <p>
        Card is a flexible component used to group and display content in a
        clear and concise format.
      </p>
      <TextOnlyCard content={"This is text only card."} />
      <br />
      <h3>How to use Text Only Card?</h3>
      <iframe
        title="text-only-card"
        src="https://carbon.now.sh/embed/KMoRk9XMIOBuFQkOBk2g"
        sandbox="allow-scripts allow-same-origin"
        className="card-iframe-component"
      ></iframe>

      {/* 3 */}
      <h2>Card With Text Overlay Component</h2>
      <p>
        Card is a flexible component used to group and display content in a
        clear and concise format.
      </p>
      <CardWithTextOverlay
        imageURL={
          "https://tse3.mm.bing.net/th?id=OIP.roeJGz3eeyhxK3XRQ0LxpQHaFj&pid=Api&P=0&h=180"
        }
        title={"Title"}
        content={"Card with text overlay."}
      />
      <br />
      <h3>How to use Card With Text Overlay?</h3>
      <iframe
        title="card-with-text"
        src="https://carbon.now.sh/embed/UVuQySS9K5u1upfxxKGT"
        sandbox="allow-scripts allow-same-origin"
        className="card-iframe-component"
      ></iframe>

      {/* 5 */}
      <h2>Verticle Card Component</h2>
      <p>
        Card is a flexible component used to group and display content in a
        clear and concise format.
      </p>
      <VerticleCard
        imageURL={
          "https://tse3.mm.bing.net/th?id=OIP.roeJGz3eeyhxK3XRQ0LxpQHaFj&pid=Api&P=0&h=180"
        }
        title={"Title"}
        content={"Card content of verticle card."}
      />
      <br />
      <h3>How to use Verticle Card?</h3>
      <iframe
        title="verticle-card"
        src="https://carbon.now.sh/embed/LNJYfd3s0EJZnWbY0SQS"
        sandbox="allow-scripts allow-same-origin"
        className="card-iframe-component"
      ></iframe>

      {/* 6 */}
      <h2>Horizontal Card Component</h2>
      <p>
        Card is a flexible component used to group and display content in a
        clear and concise format.
      </p>
      <HorizontalCard
        imageURL={
          "https://tse3.mm.bing.net/th?id=OIP.roeJGz3eeyhxK3XRQ0LxpQHaFj&pid=Api&P=0&h=180"
        }
        title={"Title"}
        content={"Card content of horizontal card."}
      />
      <br />
      <h3>How to use Horizontal Card?</h3>
      <iframe
        title="horizontal-card"
        src="https://carbon.now.sh/embed/Rs07TeHvLIhC02ayQvCo"
        sandbox="allow-scripts allow-same-origin"
        className="card-iframe-component"
      ></iframe>
    </main>
  );
};
export default Card;
