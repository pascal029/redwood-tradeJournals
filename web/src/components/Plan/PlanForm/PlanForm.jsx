import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import { PickerInline } from 'filestack-react'
import { useState } from 'react'


const PlanForm = (props) => {
  const [image, setImage] = useState(props?.plan?.image)

  const onSubmit = (data) => {
    const dataWithImageUrl = Object.assign(data, {image})
    props.onSave(dataWithImageUrl, props?.plan?.id)
  }

  const onFileUpload = (response) => {
    setImage(response.filesUploaded[0].url)
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
          defaultValue={props.plan?.pair}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="pair" className="rw-field-error" />

        <PickerInline apikey={process.env.REDWOOD_ENV_FILESTACK_API_KEY} onSuccess={onFileUpload} />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>

        <TextField
          name="description"
          defaultValue={props.plan?.description}
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

export default PlanForm
