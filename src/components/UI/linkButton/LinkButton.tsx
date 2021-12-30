import '../../../sass/LinkButton.scss'

export default function LinkButton(props: any) {
  return (
    <button className="linkBtn" {...props}>
      {props.children}
    </button>
  )
}
