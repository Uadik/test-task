import React from 'react';

import './Form.css';

const getForm = fields => {
  let newSchema = {};
  fields.forEach((field, index) => {
    if (field.group) {
      if (!newSchema[field.group]) newSchema[field.group] = [];
      newSchema[field.group] = [...newSchema[field.group], field];
    } else {
      if (!newSchema.noGroup) newSchema.noGroup = [];
      newSchema.noGroup = [...newSchema.noGroup, field];
    }
  });
  return newSchema;
};

const FormComponent = props => {
  const { title, fields, field_groups, submit_button } = props.schema;

  const newSchema = getForm(fields);

  let elements = [];

  for (const prop in field_groups) {
    const newGroup = (
      <div className={field_groups[prop]} key={prop}>
        <div className="form-group">
          {newSchema[prop].map((field, index) => {
            return (
              <div className="field-block">
                <label for={field.name}>{field.label}</label>
                {field.type === 'textarea' ? (
                  <textarea
                    className="form-textarea"
                    key={index}
                    id={field.name}
                  />
                ) : (
                  <input
                    className="form-input"
                    type={field.type}
                    key={index}
                    id={field.name}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
    elements = [...elements, newGroup];
  }

  elements = [
    ...elements,
    newSchema.noGroup.map((field, index) => {
      return (
        <div className="col-md-12" key={index}>
          <input type={field.type} className />
          <span dangerouslySetInnerHTML={{ __html: field.label }}></span>
        </div>
      );
    })
  ];

  return (
    <div>
      <h3>{title}</h3>
      <div className="row">
        {elements}
        <div className="col-md-12">
          <button className="form-submit">{submit_button.text}</button>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;

// {
//   "title": "Свяжитесь с нами",
//   "fields": [
//       { "name": "name","group": "main", "type": "text", "label": "Имя", "required": true },
//       { "name": "phone", "group": "main", "type": "phone", "label": "Телефон", "required": true },
//       { "name": "email", "group": "main", "type": "email", "label": "E-mail", "required": true },
//       { "name": "appointment_date", "group": "main", "type": "date", "label": "Дата записи", "required": true },
//       { "name": "name", "group": "additional", "type": "textarea", "label": "Комментарий", "required": false },
//       { "name": "agreement", "type": "checkbox", "label": "<span>Я даю согласие на обработку персональных данных согласно <a href='#'>политике конфиденциальности</a>.</span>"}
//   ],
//   "field_groups": {
//       "main": "col-md-8",
//       "additional": "col-md-4"
//   },
//   "submit_button": {
//       "text": "Отправить заявку"
//   }
// }
