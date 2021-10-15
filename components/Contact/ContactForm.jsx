import * as React from 'react'
import { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { m, LazyMotion, domAnimation, AnimatePresence } from 'framer-motion'
import { FiSend, FiAlertTriangle } from 'react-icons/fi'
import axios from 'axios'

import Confetti from '../Confetti'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const [errors, setErrors] = useState('')

  const hiddenRef = useRef()

  const lottieRef = useRef()
  const animRef = useRef()

  useEffect(() => {
    if (isSent) {
      ;(async () => {
        const lottie = await import('lottie-web')
        animRef.current = lottie.loadAnimation({
          container: lottieRef.current,
          renderer: 'svg',
          loop: 0,
          autoplay: true,
          path: '/lottie/check-animation.json',
        })
      })()
    }
  }, [isSent])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (hiddenRef?.current.value !== '') {
      return
    }

    if (name === '' || email === '' || subject === '' || message === '') {
      setErrors('Merci de remplir tous les champs')
      return
    }

    setIsSending(true)

    const body = {
      name,
      email,
      subject,
      message,
    }

    try {
      await axios.post('/api/contact-form', body)
      setIsSent(true)
      setName('')
      setEmail('')
      setSubject('')
      setMessage('')
    } catch (err) {
      setErrors('Erreur inattendue. Veuillez réessayer.')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <LazyMotion features={domAnimation}>
        <div>
          <input
            ref={hiddenRef}
            type='hidden'
            name='mrrobot'
            aria-label='Please do not fill in'
          />
          <AnimatePresence>
            {isSent ? (
              <SuccessMsgWrapper>
                <div style={{ width: 180, height: 180 }} ref={lottieRef} />
                <SuccessTitle
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 20 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: 'spring', damping: 12, delay: 0.1 }}
                >
                  {'Ton message a bien été envoyé'}
                </SuccessTitle>
                <Confetti />
              </SuccessMsgWrapper>
            ) : (
              <>
                <InputRow>
                  <InputFieldWrapper>
                    <Label htmlFor='name'>Nom</Label>
                    <InputField
                      id='name'
                      name='name'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </InputFieldWrapper>
                  <InputFieldWrapper>
                    <Label htmlFor='email'>Email</Label>
                    <InputField
                      id='email'
                      type='email'
                      name='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </InputFieldWrapper>
                </InputRow>
                <InputRow style={{ gridTemplateColumns: '1fr' }}>
                  <InputFieldWrapper>
                    <Label htmlFor='subject'>Sujet</Label>
                    <InputField
                      id='subject'
                      name='subject'
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      autoComplete='off'
                    />
                  </InputFieldWrapper>
                </InputRow>
                <InputFieldWrapper>
                  <Label htmlFor='message'>Message</Label>
                  <TextareaField
                    id='message'
                    name='message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </InputFieldWrapper>
                <Button whileHover={{ y: -1 }} whileTap={{ y: 1 }}>
                  {isSending ? (
                    <>Envoie...</>
                  ) : (
                    <>
                      Envoyer <FiSend style={{ marginLeft: 5 }} />
                    </>
                  )}
                </Button>
              </>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {errors && (
              <ErrMsg
                initial={{ opacity: 0, x: '-50%', y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <FiAlertTriangle
                  style={{ marginRight: 7, marginTop: -4, fontSize: '2rem' }}
                />
                {errors}
              </ErrMsg>
            )}
          </AnimatePresence>
        </div>
      </LazyMotion>
    </FormWrapper>
  )
}

export default ContactForm

// Styles
const FormWrapper = styled.form`
  display: grid;
  align-items: center;
  gap: 80px;
  position: relative;
  z-index: 3000;

  @media (max-width: 500px) {
    padding: 0;
    max-width: 100%;
    grid-template-columns: 1fr;
  }
`

const InputRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  width: 100%;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`

const InputFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Label = styled.label`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 5px;
  color: var(--labelColor);

  @media (min-width: 1024px) {
    font-size: 1.6rem;
  }
`

const InputField = styled.input`
  border: 1px solid var(--inputBorder);
  color: var(--inputText);
  background: var(--inputBackground);
  padding: 0.9em 0.5em;
  border-radius: 5px;
  font-size: 1.8rem;
  font-family: inherit;
  margin-bottom: 16px;
  -webkit-appearance: none;

  &:focus {
    border: 1px solid transparent;
    outline-color: hsl(225, 100%, 78%);
    outline-offset: 2px;
  }
`

const TextareaField = styled.textarea`
  border: 1px solid var(--inputBorder);
  color: var(--inputText);
  background: var(--inputBackground);
  padding: 0.9em 0.5em;
  border-radius: 5px;
  font-size: 1.8rem;
  font-family: inherit;
  margin-bottom: 12px;
  min-height: 200px;
  resize: none;
  -webkit-appearance: none;

  &:focus {
    border: 1px solid transparent;
    outline-color: hsl(225, 100%, 78%);
    outline-offset: 2px;
  }
`

const Button = styled(m.button)`
  border: none;
  padding: 0.9em 1.3em;
  margin-top: 20px;
  font-size: 1.8rem;
  border-radius: 5px;
  background: hsl(225, 100%, 40%);
  color: hsl(225, 100%, 98%);
  font-weight: 600;
  display: flex;
  align-items: center;
  cursor: pointer;
  will-change: transform;
  filter: drop-shadow(0 0 0.75rem hsla(225, 98%, 44%, 0.4));
  width: 180px;
  justify-content: center;

  @media (max-width: 500px) {
    width: 100%;
  }

  &:focus {
    border: 1px solid transparent;
    outline-color: hsla(225, 98%, 54%, 1);
    outline-offset: 1px;
  }
`

const ErrMsg = styled(m.span)`
  position: absolute;
  left: 50%;
  bottom: -50px;
  color: red;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  white-space: nowrap;
`

const SuccessMsgWrapper = styled(m.div)`
  min-height: 489px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: -50px;
`

const SuccessTitle = styled(m.h3)`
  margin: 0;
  font-size: 2.4rem;
  color: var(--textColor);
  line-height: 1.2;
`
