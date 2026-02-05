import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  // Overenie tajného kľúča
  const secret = request.nextUrl.searchParams.get('secret')
  
  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }

  try {
    // Obnovíme blog listing
    revalidatePath('/blog')
    
    // Môžeme obnoviť aj detail článku ak je v body
    const body = await request.json()
    if (body?.slug?.current) {
      revalidatePath(`/blog/${body.slug.current}`)
    }

    return NextResponse.json({ 
      revalidated: true, 
      now: Date.now() 
    })
  } catch (err) {
    console.error('Revalidation error:', err)
    return NextResponse.json({ 
      message: 'Error revalidating',
      error: err instanceof Error ? err.message : 'Unknown error'
    }, { status: 500 })
  }
}
