import { MessageCircleCheck, NotebookPen, Mail, ZoomIn, CheckCheck } from 'lucide-react'
import ContactBtn from './btns/ContactBtn'
import TopicBtn from './btns/TopicBtn'

type Props = {
    className?:string
}

export default function Reimbursement({className} : Props) {
  return (
    <div id='kostenerstattung' className={`scroll-mt-24 ${className}`}>
               <h2>Was mache ich, wenn ich keinen Psychotherapieplatz finde?</h2>
        <h1>Das Kostenerstattungsverfahren erklärt</h1>
        <div className="max-w-4xl flex flex-col gap-4">
          <p>
            Für gesetzlich Versicherte müssten in München ausreichend
            Therapieplätze vorhanden sein. Die Realität zeigt, dass der Bedarf
            an Psychotherapie höher ist als die verfügbaren Therapieplätze in
            Kassenpraxen.
          </p>
          <p>
            Um dennoch eine dringlich notwendige psychotherapeutische Behandlung
            gesetzlich Versicherten nicht vorzuenthalten, können gesetzliche
            Krankenkassen nach ausführlicher Prüfung eine Behandlung in einer
            Privatpraxis übernehmen. Dabei bleibt meist jedoch eine
            Eigenbeteiligung für gesetzlich Versicherte.{" "}
          </p>
          <p>
            Das Kostenerstattungsverfahren in der gesetzlichen Krankenkasse
            (GKV) in Deutschland bedeutet somit, dass Sie Ihre Behandlung in
            einer Privatpraxis selbst bezahlen und die Kosten nach positiv
            bewilligtem Antrag von der gesetzlichen Krankenkasse teilweise
            erstattet bekommen.{" "}
          </p>
          <p className="font-semibold">Ablauf</p>
          <div className="flex md:items-center gap-2 ">
            <MessageCircleCheck
              size={32}
              className="shrink-0 text-sage-dark font-semibild"
            />
            <span className="font-semibold text-xl !text-sage-dark">
              Krankenkassen Informieren
            </span>
          </div>
          <p>
            Informieren Sie Ihre Krankenkasse darüber, dass Sie eine ambulante
            Psychotherapie beginnen möchten und bitten Sie um die Mitteilung von
            approbierten PsychotherapeutInnen, die für Ihre diagnostizierte
            Erkrankung eine Behandlung anbieten.
          </p>
          <div className="flex md:items-center gap-2 ">
            <NotebookPen
              size={32}
              className="shrink-0 text-sage-dark font-semibild"
            />
            <span className="font-semibold text-xl !text-sage-dark">
              Psychotherapieplatzsuche dokumentieren
            </span>
          </div>
          <p>
            Im Anschluss ist zu dokumentieren, dass die von der Krankenkasse
            benannten TherapeutInnen innerhalb eines zumutbaren Zeitraums, in
            der Regel etwa 6 Wochen bis 3 Monate, keinen Therapieplatz anbieten
            können. Falls von Ihrer Krankenkasse keine konkreten Namen von
            qualifizierten PsychotherapeutInnen genannt werden, sollten Sie
            selbst mindestens fünf approbierte PsychotherapeutInnen mit
            Kassenzulassung („Kassensitz“) kontaktieren und schriftlich
            dokumentieren, dass dort aktuell kein Behandlungsplatz verfügbar
            ist. Die Dokumentation umfasst insbesondere Datum und Uhrzeit der
            Kontaktaufnahme sowie das jeweilige Ergebnis. Zum Beispiel: "kein
            freier Therapieplatz", "keine Aufnahme möglich", "Wartezeit über
            einem zumutbaren Rahmen".
          </p>
          <div className="flex md:items-center gap-2 ">
            <Mail size={32} className="shrink-0 text-sage-dark font-semibild" />
            <span className="font-semibold text-xl !text-sage-dark">
              Dokumentation einreichen
            </span>
          </div>
          <p>
            Diese Unterlagen reichen Sie anschließend bei Ihrer Krankenkasse
            ein, zusammen mit einer ärztlichen Bescheinigung über die dringliche
            Notwendigkeit einer Psychotherapie, durch eine/n Hausärztin/Hausarzt
            oder eine Fachärztin/Facharzt für Psychotherapie. Ergänzend weisen
            Sie darauf hin, dass bei einem privat niedergelassenen approbierten
            Psychotherapeuten die Möglichkeit einer Behandlung im
            Kostenerstattungsverfahren besteht und legen Sie eine Bescheinigung
            hierüber ebenfalls bei Ihrer gesetzlichen Krankenkasse vor.
          </p>
   
          <div className="flex md:items-center gap-2 ">
            <ZoomIn
              size={32}
              className="shrink-0 text-sage-dark font-semibild"
            />
            <span className="font-semibold text-xl !text-sage-dark">
              Überprüfung des Antrags
            </span>
          </div>
          <p>
            Anschließend wird Ihr Antrag auf die Kostenerstattung einer
            psychotherapeutischen Behandlung in einer Privatpraxis von einem von
            der Krankenkasse beauftragten GutachterIn geprüft.
          </p>
          <div className="flex md:items-center gap-2 ">
            <CheckCheck
              size={32}
              className="shrink-0 text-sage-dark font-semibild"
            />
            <span className="font-semibold text-xl !text-sage-dark">
              Kostenerstattung
            </span>
          </div>
          <p>
            Wird Ihr Antrag genehmigt, übernimmt Ihre Krankenkasse die Kosten
            für die psychotherapeutische Behandlung. Die Abrechnung erfolgt in
            der Regel direkt zwischen Ihnen und der Krankenkasse: Sie erhalten
            die Rechnung für die jeweilige Sitzung und reichen diese
            anschließend zur Erstattung ein.
          </p>
          <p>
            Für weitere Informationen zum Kostenerstattungsverfahren{" "}
            <span className="!text-red-500">Konkrete URL?</span>
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-4 mt-4">
            <ContactBtn className="w-full lg:w-44" />
            <TopicBtn text={"Ablauf & Kosten"} path={"/ablauf-und-kosten/"} />
          </div>
        </div>
    </div>
  )
}
