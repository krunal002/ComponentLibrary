import { ImageBox, RoundImageBox } from "../../Components/Image/Image";
import "./Image.css";

const Image = () => {
  return (
    <main>
      <div>
        <h1>Image Component</h1>
        <p>
          The image component is used to display images with support for
          fallback.
        </p>
        <div>
          <ImageBox
            imageUrl="https://tse1.explicit.bing.net/th?id=OIP.cq2F1ltSo2frtm9UZqhVawHaDt&pid=Api&P=0&h=180"
            variant={"400x200"}
          />
        </div>
        <br />

        <h3>How to use Image Component?</h3>
        <iframe
          title="image-componet"
          src="https://carbon.now.sh/embed/eY5AkoJMffSyk3bIfbZS"
          sandbox="allow-scripts allow-same-origin"
          className="image-iframe-component"
        ></iframe>
        <br />
      </div>

      <div>
        <h1>Round Image Component</h1>
        <p>The round image component is used to display images round shape.</p>
        <div>
          <RoundImageBox
            imageUrl="https://tse1.explicit.bing.net/th?id=OIP.cq2F1ltSo2frtm9UZqhVawHaDt&pid=Api&P=0&h=180"
            variant={"300"}
          />
        </div>
        <br />

        <h3>How to use Image Component?</h3>
        <iframe
          title="image-component"
          src="https://carbon.now.sh/embed/eY5AkoJMffSyk3bIfbZS"
          sandbox="allow-scripts allow-same-origin"
          className="image-iframe-component"
        ></iframe>
        <br />
      </div>
    </main>
  );
};
export default Image;
