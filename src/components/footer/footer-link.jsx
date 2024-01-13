export default function FooterLink({link}) {
  return (
    <li>
      <a className='hover:underline' href={link.url} target="_blank" rel="noopener noreferrer">
         {link.name}
      </a>
    </li>
  )
}
