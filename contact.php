<?php

$name = $_POST["name"] ?? "";
$email = $_POST["email"] ?? "";
$product = $_POST["product"] ?? "";
$message = $_POST["message"] ?? "";

?>

<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">

    <title>Message Sent - FleurEverYoung</title>

    <link rel="stylesheet" href="style.css">

</head>

<body>

    <section class="contact">

        <div class="contact-info">

            <h3>thank you, <?php echo htmlspecialchars($name); ?>!</h3>

            <p>
                Your message has been received.
            </p>

            <p>
                Product: <?php echo htmlspecialchars($product); ?>
            </p>

            <p>
                Email: <?php echo htmlspecialchars($email); ?>
            </p>

            <p>
                Message:
                <?php echo nl2br(htmlspecialchars($message)); ?>
            </p>

            <a href="index.html" class="btn">
                back to website
            </a>

        </div>

    </section>

</body>

</html>





