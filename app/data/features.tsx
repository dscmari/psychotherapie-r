import { Siren, CloudRain, BatteryLow, Utensils } from "lucide-react";

export const verhaltenstherapieFeatures = {
  headline: "Anwendungsfelder",
  subheader: "Verhaltenstherapie",
  intro:
    "Unterstützung bietet die Verhaltenstherapie bei zahlreichen psychischen und psychosomatischen Beschwerden.",
  bullets: [
    {
      icon: <Siren className="shrink-0" size={36} />,
      header: "Ängste und Panik",
      text: "Gezielte Methoden helfen Ihnen dabei, das Nervensystem zu beruhigen, feste Angstkreisläufe zu durchbrechen und so wieder mehr innere Ruhe im Alltag zu gewinnen.",
    },
    {
      icon: <CloudRain className="shrink-0" size={36} />,
      header: "Depression",
      text: "Bei anhaltender Niedergeschlagenheit und Antriebslosigkeit helfen wir Ihnen, neue Lebensfreude, Energie und Perspektiven zu finden.",
    },
    {
      icon: <BatteryLow className="shrink-0" size={36} />,
      header: "Stress und Erschöpfung",
      text: "Wenn chronische Überlastung zur Erschöpfung führt, unterstützen wir Sie dabei, Grenzen zu setzen, Ressourcen aufzutanken und Ihre Balance wiederzufinden.",
    },
    {
      icon: <Utensils className="shrink-0" size={36} />,
      header: "Essstörungen",
      text: "Wir begleiten Sie auf dem Weg zu einem gesunden Bezug zu Essen und Ihrem Körper, um wieder mehr Unbeschwertheit und Selbstwertgefühl zu erlangen.",
    },
  ],
};
