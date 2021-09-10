import { Form, FormControl, Button } from "react-bootstrap";

const FormSearch = () => {
  return (
    <div id="form-search__container">
      <Form className="d-flex">
        <FormControl
          id="search-input"
          type="search"
          placeholder="Buscar..."
          className="mr-2"
          aria-label="Search"
        />
        <Button id="button-search"><i class="fas fa-search"></i></Button>
      </Form>
    </div>
  );
};

export default FormSearch;
