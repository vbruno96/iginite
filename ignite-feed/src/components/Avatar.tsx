import { ImgHTMLAttributes } from 'react'
import styles from '../assets/css/Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean
}

export function Avatar({ hasBorder, ...props }: AvatarProps) {
  return <img
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            {...props}
          />
}