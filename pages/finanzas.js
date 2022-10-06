import { useAccounts } from 'hooks/useAccounts'
import { useEffect, useState } from 'react'

function finanzas() {
  const dataAccounts = useAccounts()

  return (
    <main className="layout" style={stylePage.main}>
      <header className="header" style={stylePage.header}>
        <h1 style={stylePage.title}>Mis finanzas</h1>
      </header>
      <section>
        <h2 style={stylePage.myMoney.title}>Dinero actual: $400</h2>
        <ul style={stylePage.myMoney.ul}>
          <li style={stylePage.myMoney.bg}>
            <p>
              Efectivo:<span style={stylePage.myMoney.price}>$400</span>
            </p>
          </li>
          <li style={stylePage.myMoney.bb}>
            <p>
              BBVA:<span style={stylePage.myMoney.price}>$400</span>
            </p>
          </li>
          <li style={stylePage.myMoney.bg}>
            <p>
              Mercado Pago:<span style={stylePage.myMoney.price}>$400</span>
            </p>
          </li>
        </ul>
      </section>
      <FormSpent />
      <Movement />
    </main>
  )
}

function FormSpent() {
  return (
    <section style={{ marginTop: '40px' }}>
      <h2 style={{ ...stylePage.subTitle }}>Formulario movimientos</h2>

      <form style={stylePage.FormSpent}>
        <InputFinance label="Razón" />
        <InputFinance label="Monto" type="number" />
        <SelectFinance label="Tipo">
          <>
            <option>Gasto</option>
            <option>Ingreso</option>
          </>
        </SelectFinance>
        <SelectFinance label="Metodo">
          <>
            <option>Efectivo</option>
            <option>BBVA</option>
            <option>Mercado Pago</option>
          </>
        </SelectFinance>
        <p>
          Representa el{' '}
          <span style={{ color: 'cornflowerblue', fontWeight: 'bold' }}>
            %5
          </span>{' '}
          de tus ingreso mesual.
        </p>
        <p>
          Después del gasto tienes{' '}
          <span style={{ color: 'cornflowerblue', fontWeight: 'bold' }}>
            $5
          </span>
        </p>
        <ButtonFinance style={{ maxWidth: '300px' }}>Guardar</ButtonFinance>
      </form>
    </section>
  )
}
function Movement() {
  const widthSelect = '120px'
  return (
    <section style={{ marginTop: '40px' }}>
      <h2 style={{ ...stylePage.subTitle }}>Movimientos</h2>
      <form
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
          marginLeft: '12px',
        }}
      >
        <SelectFinance label="Tipo" style={{ width: widthSelect }}>
          <>
            <option>Ambos</option>
            <option>Gasto</option>
            <option>Ingreso</option>
          </>
        </SelectFinance>
        <SelectFinance label="Monto" style={{ width: widthSelect }}>
          <>
            <option>Por defecto</option>
            <option>Menor a mayor</option>
            <option>Menor a mayor</option>
          </>
        </SelectFinance>
        <SelectFinance label="Metodo" style={{ width: widthSelect }}>
          <>
            <option>Efectivo</option>
            <option>BBVA</option>
            <option>Mercado Pago</option>
          </>
        </SelectFinance>
      </form>
      <ul style={{ ...stylePage.myMoney.ul, marginLeft: 0, marginTop: '12px' }}>
        <ItemSpent></ItemSpent>
        <li style={stylePage.myMoney.bg}>
          <p>
            Efectivo:<span style={stylePage.myMoney.price}>$400</span>
          </p>
        </li>
      </ul>
    </section>
  )
}
function ButtonFinance({ children, style = {}, ...props }) {
  return (
    <button
      style={{
        color: '#56575c',
        fontWeight: '600',
        background: 'aliceblue',
        border: 'solid 1px cornflowerblue',
        ...style,
        ...stylePage.resetInput,
      }}
      {...props}
    >
      {children}
    </button>
  )
}
function InputFinance({ label, style = {}, ...props }) {
  return (
    <div>
      <label style={{ display: 'block', fontSize: '16px' }}>{label}</label>
      <input
        style={{
          ...style,
          ...stylePage.resetInput,
        }}
        {...props}
      />
    </div>
  )
}

function SelectFinance({ label, style = {}, children, ...props }) {
  return (
    <div>
      <label style={{ display: 'block', fontSize: '16px' }}>{label}</label>
      <select
        style={{
          ...stylePage.resetInput,
          ...style,
        }}
        {...props}
      >
        {children}
      </select>
    </div>
  )
}

function ItemSpent({ reason = 'Hormiga', amount = 0, index = 1 }) {
  const background =
    index % 2 === 0 ? stylePage.myMoney.bb : stylePage.myMoney.bg
  return (
    <li
      style={{
        ...background,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <p>
        {reason}:<span style={stylePage.myMoney.price}>${amount}</span>
      </p>
      <button
        style={{
          background: 'transparent',
          border: 'none',
          color: 'crimson',
          fontWeight: '600',
        }}
      >
        Elimnar
      </button>
    </li>
  )
}

const stylePage = {
  main: {
    background: 'acua',
  },
  header: {
    marginTop: '40px',
  },
  title: {
    fontSize: '40px',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: '20px',
    fontWeight: '500',
    marginBottom: '12px',
  },
  FormSpent: {
    marginLeft: '12px',
    display: 'flex',
    maxWidth: '400px',
    flexDirection: 'column',
    gap: '12px',
  },
  resetInput: {
    height: '30px',
    width: '100%',
    boxSizing: 'border-box',
  },
  myMoney: {
    title: {
      fontSize: '20px',
      fontWeight: '500',
      marginBottom: '12px',
    },
    ul: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      marginLeft: '12px',
    },
    bg: { background: '#e6ebea' },
    bb: { background: 'aliceblue' },
    price: {
      fontWeight: '600',
    },
  },
}
export default finanzas
