import React, { FC } from 'react'
import styles from './styles.module.scss'
import { motion } from 'framer-motion'

export interface AvatarProps {
  image: string
}

const Avatar: FC<AvatarProps> = (props) => {
  const { image } = props
  return (
    <motion.img whileHover={{ y: 3 }} className={styles.avatar} src={image} alt="avatar" />
  )
}

export default Avatar
