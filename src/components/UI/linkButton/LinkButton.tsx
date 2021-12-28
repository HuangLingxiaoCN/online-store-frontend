import '../../../css/LinkButton.css'

export default function LinkButton(props: any) {
  return (
    <button className="linkBtn">
      {props.children}
    </button>
  )
}
