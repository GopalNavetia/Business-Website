import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import { serviceGroups } from "../data/services";
import Services from "./Services";

function ServiceGroup() {
    const { groupSlug } = useParams();
    const group = serviceGroups.find((item) => item.slug === groupSlug);

    if (!group) return <NotFound />;

    return <Services groupSlug={group.slug} />;
}

export default ServiceGroup;
