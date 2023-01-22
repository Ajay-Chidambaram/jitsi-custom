ARG JITSI_REPO=jitsi
ARG BASE_TAG=latest
FROM ${JITSI_REPO}/web:${BASE_TAG}

# ADD https://raw.githubusercontent.com/acmesh-official/acme.sh/2.8.8/acme.sh /opt
# COPY rootfs/ /

EXPOSE 80 443

VOLUME ["/config", "/usr/share/jitsi-meet/transcripts"]