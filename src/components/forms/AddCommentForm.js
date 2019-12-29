import React, { useState } from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Button } from "../ui";
import TextFieldGroup from "./fields/TextFieldGroup";

const AddCommentForm = ({ postComment, errors, markerId }) => {
  const [comment, setcomment] = useState("");

  const onChange = e => {
    setcomment(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    postComment(comment, markerId);
    setcomment("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <TextFieldGroup
          name="comment"
          placeholder="Коментар"
          value={comment}
          error={errors.comment}
          onChange={onChange}
          type="text"
        />
        <Button type="submit" disabled={!(comment.length > 3)} empty>
          <span> Відповісти</span>
        </Button>
      </form>
    </div>
  );
};

AddCommentForm.propTypes = {
  // auth: PropTypes.object.isRequired,
  // errors: PropTypes.object.isRequired
};

const mapStateToPtops = state => ({
  // auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToPtops)(AddCommentForm);
