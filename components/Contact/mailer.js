const mail = ({ name, email, message }) => {
  const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
  const body = encodeURIComponent(`${message}\n\nReply to: ${email}`);
  window.location.href = `mailto:kbkareem31@gmail.com?subject=${subject}&body=${body}`;
  return Promise.resolve({ status: 200 });
};

export default mail;
