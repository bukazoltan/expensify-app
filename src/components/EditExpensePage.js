import React from 'react';

const EditExpensePage = (props) => {
  console.log(props)
  return (
  <div>
    This is from EditExpensePage. You are currently editing the expense with id #{props.match.params.id}
  </div>);
}

export default EditExpensePage;