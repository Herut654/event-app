import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Grid } from '@mui/material';
import RecommendSlider from '../components/RecommendSlider';
import { getHamlatzot } from '../features/hamlatzot/hamlatzhaSlice';
import Spinner from '../components/Spinner';

function Home() {
  const dispatch = useDispatch()
  const { hamlatzot, isLoading, isError, message } = useSelector(
    (state) => state.hamlatzot
  )

  useEffect(() => {
    dispatch(getHamlatzot())
  }, [isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  console.log('hamlatzot', hamlatzot)

  return (
    <>
      <section className='heading'>
      <p>מתכננים אירוע שמחה ומחפשים רעיונות יצירתיים? [ איוונטרקינג] מאגד את מיטב הספקים לחתונות, בר מצוות, ימי הולדת ועוד - במקום אחד וללא עלות! עיינו במגוון רחב של הצעות לאולמות, קייטרינג, עיצוב, מוזיקה, צילום ועוד. קבלו השראה ליצירת אירוע מושלם בדיוק בסגנונכם. נהנו מהמלצות אישיות, ביקורות משתמשים אמינות ואפשרות להשוואה בין ספקים שונים - הכל כדי לעזור לכם לבחור נכון ולחסוך בזמן וכסף. הצטרפו ל-[ איוונטרקינג] וקבלו גישה למדריך האירועים המקיף ביותר, ללא עלות! יחד ניצור את האירוע המושלם עבורך </p>
      </section>

      <section className='heading'>
        <p>האתר מציע מגוון רחב של ספקים מהטובים בתחום - מה שעושה אותו לפלטפורמה המובילה לתכנון אירועים. החל מאולמות, דיג'ייז, צלמים, מעצבים וכלה בספקים ייחודיים כמו סדנאות יצירה לילדים.
           האתר מאפשר למצוא בקלות את כל הספקים הדרושים לאירוע במקום אחד - חוסך זמן יקר ומאמץ בחיפושים.
           קל מאוד להשוות בין הספקים השונים, לקרוא ביקורות ולבחור את המתאים ביותר לצרכים ולתקציב שלכם.
           תהליך הזמנת הספקים פשוט וידידותי. התשלום מאובטח והכל מוכן מראש ללא דאגות.
           שירות לקוחות מצוין, תמיד זמינים לעזור ולייעץ בכל שאלה.
           ממליצה בחום על האתר לכל מי שמתכנן אירוע ורוצה לחסוך זמן יקר וליהנות מהמחירים והאיכות הטובה ביותר </p>
      </section>

      <section className='heading'>
        <p>המלצות והתרשמות מהאתר שלנו:</p>
        </section>
      
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
        {hamlatzot.length ? <RecommendSlider data={hamlatzot} /> : <>אין כרגע המלצות</>}
      </Grid>
    </>
  )
}

export default Home
