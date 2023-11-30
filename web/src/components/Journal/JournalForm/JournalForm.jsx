import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const JournalForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.journal?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="pair"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Pair
        </Label>

        <TextField
          name="pair"
          defaultValue={props.journal?.pair}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="pair" className="rw-field-error" />

        <Label
          name="imageBefore"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Image before
        </Label>

        <TextField
          name="imageBefore"
          defaultValue={props.journal?.imageBefore}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="imageBefore" className="rw-field-error" />

        <Label
          name="imageAfter"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Image after
        </Label>

        <TextField
          name="imageAfter"
          defaultValue={props.journal?.imageAfter}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="imageAfter" className="rw-field-error" />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>

        <TextField
          name="description"
          defaultValue={props.journal?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="description" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default JournalForm
