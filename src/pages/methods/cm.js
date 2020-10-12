import React from 'react'
import Entry from '../../components/entry'
import Link from '../../components/Link'
import { BlockMath, InlineMath } from 'react-katex'
import CodeBlock from "../../components/CodeBlock"
import { Styled } from "theme-ui"

export default ({data, location}) => {
  return (
    <Entry data={data} location={location} title={"CM"}>
      <Styled.h2>Complex multiplication</Styled.h2>
      <Styled.p>
        Complex multiplication (CM) is a method which utilizes class field theory in order to generate curves with a prescribed order. Namely, if  
      </Styled.p> 
      <BlockMath>
          {`\\begin{aligned}
          Ds^2 &= 4 q - t^2
          \\end{aligned}`}
      </BlockMath>
    <Styled.p>  
     and <InlineMath>j</InlineMath> is a root of the <InlineMath>D</InlineMath>-th Hilbert class polynomial modulo <InlineMath>q</InlineMath> (which is a prime), then any curve with j-invariant <InlineMath>j</InlineMath> (or its quadratic twist) will have order <InlineMath>q+1+t</InlineMath> over <InlineMath>{'\\mathbb{F}_q'}</InlineMath>. Given the j-invariant, such a curve can be easily constructed: for example, we can define it by the Weierstrass equation
    </Styled.p> 
    <BlockMath>
          {`\\begin{aligned}
           y^2 &= x^3 + 3 k c^2 x + 2 k c^3,
          \\end{aligned}`}
    </BlockMath>
    <Styled.p> 
     where <InlineMath>k = j / (1728 - j)</InlineMath> and <InlineMath>{`c \\in \\mathbb{F}_q'}</InlineMath> is arbitrary. (Note that this does not work for the special cases <InlineMath>j=0</InlineMath> and <InlineMath>j=1728</InlineMath>, which correspond to curves given by <InlineMath>y^2 = x^3 - 1</InlineMath> and y^2 = x^3 - x</InlineMath>, respectively.) The bottleneck is the Hilbert polynomial computation, which allows us to only use a small <InlineMath>D</InlineMath> (currently up to around 44 bits). In particular, every curve generated by the CM method will necessarily have a small <InlineMath>D</InlineMath> (called CM discriminant), which means its ring of endomorphisms can be efficiently constructed. Apart from a slight speed-up of scalar multiplication, it is not known whether this significantly impacts security, but such curves certainly cannot be considered random.
     </Styled.p>     
	  <Styled.h4>References</Styled.h4>
	  <ul>
	  	<li><Link to="https://crypto.stanford.edu/pbc/notes/ep/cm.html">Stanford crypto notes</Link></li>
	  	<li>Andrew Sutherland: <Link to="https://arxiv.org/pdf/0903.2785.pdf">Computing Hilbert class polynomials with the Chinese remainder theorem</Link></li>
	  	<li>Daniel J. Bernstein and Tanja Lange: <Link to="https://safecurves.cr.yp.to">SafeCurves: choosing safe curves for elliptic-curve cryptography, accessed 12 October 2020.</Link></li>
	  </ul>
    </Entry>
  )
}