<template>
  <div class="container">
    <h2>{{ t('profile.title') }}</h2>

    <Form @submit="onSubmit" v-slot="{ meta, handleSubmit, resetForm }">
      <!-- Name -->
      <div class="form-group">
        <label>{{ t('profile.name') }}</label>
        <Field name="name" class="input" />
        <ErrorMessage name="name" class="error" />
      </div>

      <!-- Email -->
      <div class="form-group">
        <label>{{ t('profile.email') }}</label>
        <Field name="email" class="input" />
        <ErrorMessage name="email" class="error" />
      </div>

      <!-- Date of Birth -->
      <div class="form-group">
        <label>{{ t('profile.dateOfBirth') }}</label>
        <Field name="dateOfBirth" type="date" class="input" />
        <ErrorMessage name="dateOfBirth" class="error" />
      </div>

      <!-- Address -->
      <div class="form-group">
        <label>{{ t('profile.address') }}</label>
        <Field name="address" class="input" />
        <ErrorMessage name="address" class="error" />
      </div>

      <!-- Phones -->
      <div class="form-group">
        <label>{{ t('profile.phones') }}</label>
        <div v-for="(phone, index) in phones.fields" :key="phone.key" class="phone-field">
          <Field :name="`phones[${index}]`" class="input" />
          <button type="button" @click="phones.remove(index)">-</button>
          <ErrorMessage :name="`phones[${index}]`" class="error" />
        </div>
        <button type="button" @click="phones.push('')">{{ t('profile.addPhone') }}</button>
      </div>

      <!-- Buttons -->
      <div class="form-actions">
        <button type="submit" :disabled="!meta.valid || !meta.dirty">{{ t('profile.save') }}</button>
        <button type="button" @click="resetForm()">{{ t('profile.reset') }}</button>
      </div>
    </Form>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { Form, Field, ErrorMessage, useForm, useFieldArray } from 'vee-validate'
import * as Yup from 'yup'

// i18n
const { t } = useI18n()

// Валідаційна схема
const schema = Yup.object({
  name: Yup.string().required(t('profile.errors.required')),
  email: Yup.string().email(t('profile.errors.invalidEmail')).required(t('profile.errors.required')),
  dateOfBirth: Yup.date().nullable(),
  address: Yup.string().required(t('profile.errors.required')),
  phones: Yup.array().of(Yup.string().min(5, t('profile.errors.minPhone')))
})

// Ініціалізація форми
const { handleSubmit, resetForm, setFieldError, meta, values } = useForm({
  validationSchema: schema,
  initialValues: {
    name: '',
    email: '',
    dateOfBirth: '',
    address: '',
    phones: ['']
  }
})

// Масив телефонів
const phones = useFieldArray('phones')

// Сабміт
const onSubmit = handleSubmit((values) => {
  console.log('Profile submitted:', values)
  // Емуляція серверної помилки
  if (values.name === 'Error') {
    setFieldError('name', t('profile.errors.server'))
  }
})
</script>

<style scoped>
.container {
  max-width: 500px;
  margin: auto;
}
.form-group {
  margin-bottom: 15px;
}
.input {
  width: 100%;
  padding: 6px;
  margin-top: 4px;
}
.error {
  color: red;
  font-size: 0.85em;
}
.phone-field {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 5px;
}
.form-actions {
  display: flex;
  gap: 10px;
  margin-top: 15px;
}
button {
  padding: 6px 12px;
}
</style>
