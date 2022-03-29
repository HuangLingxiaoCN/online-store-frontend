import { GenericProps } from '../../../Types'
import '../../../sass/LinkButton.scss'

export default function LinkButton(props: GenericProps) {
  return (
    <button className="linkBtn" {...props}>
      {props.children}
    </button>
  )
}
