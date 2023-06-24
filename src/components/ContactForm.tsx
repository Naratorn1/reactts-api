import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import "../assets/css/sidebar.css";
import { useState, FC, useEffect } from "react";
import { getAll, getMovie } from "../api";

const ContactForm: FC = () => {
  const [posts, setPosts] = useState([]);

  function handleChange(event: any) {
    if (event.target.value != "") {
      getMovie(event.target.value).then((data) => setPosts(data));
    } else {
      getAll().then((data) => setPosts(data));
    }
  }
  useEffect(() => {
    let ignore = false;
    if (!ignore) getAll().then((data) => setPosts(data));
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <Container fluid>
      <Row
        className="justify-content-md-center imgbg"
        style={{ paddingBottom: "12px" }}
      >
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <br />
          <Form.Control
            type="text"
            onChange={handleChange}
            className="form-control"
            placeholder="Search Movie"
          />
        </Form.Group>
        {posts.length > 0 ? (
          posts.map((post: any) => (
            <Card
              key={post.id}
              style={{ width: "17rem", marginRight: "1rem", marginTop: "2rem" }}
            >
              <Card.Img
                style={{ marginTop: "1rem" }}
                variant="top"
                src={`https://image.tmdb.org/t/p/original/${post.poster_path}`}
              />

              <Card.Body>
                <Card.Title>
                  {" "}
                  {Boolean(post.title) == false ? post.name : post.title}
                </Card.Title>
                <Card.Text>
                  {" "}
                  {post.overview.length > 150
                    ? `${post.overview.substring(0, 150)}...`
                    : post.overview}
                </Card.Text>
                <Card.Text>Release Data : {post.release_date}</Card.Text>
                <Card.Text>vote average : {post.vote_average}</Card.Text>
              </Card.Body>
            </Card>
          ))
        ) : (
          <Card
            style={{ width: "50rem", marginRight: "1rem", marginTop: "2rem" }}
          >
            <Card.Img
              style={{ marginTop: "1rem" }}
              variant="top"
              src={`https://aioseo.com/wp-content/uploads/2021/04/how-to-find-and-fix-404-errors-in-wordpress.png.webp`}
            />
            <Card.Body>
              <Card.Title>Oops!</Card.Title>
              <Card.Text>
                We can't seem to find the movie you're looking for{" "}
              </Card.Text>
            </Card.Body>
          </Card>
        )}
      </Row>
    </Container>
  );
};

export default ContactForm;
