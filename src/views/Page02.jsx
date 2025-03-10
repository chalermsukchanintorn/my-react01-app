import React from 'react'
import { useLocation } from 'react-router-dom';
import dayjs from 'dayjs';
import 'dayjs/locale/th';

function Page02() {
  const location = useLocation();
  const { fullname, email, password, age, gender, birthDate, java, cs, python } = location.state || {};

  return (
    <div>
      <h1>Page 02</h1>
      <p>Fullname: {fullname}</p>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
      <p>Age: {age}</p>
      <p>Gender: {gender}</p>
      <p>BirthDate: {dayjs(birthDate).locale('th').format('D MMMM BBBB')}</p>
      <p>Skills: {`${java} ${cs} ${python}`}</p>
    </div>
  )
}

export default Page02