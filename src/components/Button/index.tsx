import React, { FC } from 'react'
import styles from './styles.module.scss'
import { motion } from 'framer-motion'

export interface ButtonProps {
  label: string
}

const Button: FC<ButtonProps> = (props) => {
  const { label } = props
  return (
    <motion.button whileTap={{ scale: .96 }} className={styles.button}>
      {label}
    </motion.button>
  )
}

export default Button
